#!/bin/bash
TARGET_DIR="${1:-.}"
DEPTH=3
MAX_LINES=200
OUTPUT_FILE="llm_snapshot.log"
EXCLUDES=".git|node_modules|__pycache__|.venv|env|dist|build"
TEXT_EXT="md|txt|py|js|ts|html|css|json|yaml|yml|sh|csv|sql|toml|ini"

if [ ! -d "$TARGET_DIR" ]; then echo "❌ Not found: $TARGET_DIR"; exit 1; fi
exec > "$OUTPUT_FILE"

echo "📦 LLM PROJECT SNAPSHOT"
echo "Directory: $TARGET_DIR"
echo "Generated: $(date)"
echo

TOTAL_FILES=$(find "$TARGET_DIR" -type f | wc -l)
TOTAL_DIRS=$(find "$TARGET_DIR" -type d | wc -l)
echo "Files: $TOTAL_FILES  Folders: $TOTAL_DIRS"
echo

echo "$TARGET_DIR"
find "$TARGET_DIR" -mindepth 1 -maxdepth $DEPTH \
  | grep -Ev "$EXCLUDES" \
  | sed "s|$TARGET_DIR/||" \
  | sort \
  | awk -F/ '{ indent=""; for(i=1;i<NF;i++) indent=indent "│   "; print indent "├── " $NF }'
echo

find "$TARGET_DIR" -type f \
  | grep -Ev "$EXCLUDES" \
  | grep -Ei "\.($TEXT_EXT)$" \
  | sort \
  | while read -r file; do
    echo "------------------------------------------"
    echo "📄 FILE: $file"
    echo "------------------------------------------"
    LINES=$(wc -l < "$file")
    echo "Lines: $LINES"
    if [ "$LINES" -le "$MAX_LINES" ]; then cat "$file"
    else echo "⚠️ Truncated"; head -n "$MAX_LINES" "$file"; echo "... [TRUNCATED]"; fi
    echo
done

echo "✅ DONE → paste $OUTPUT_FILE into your LLM"