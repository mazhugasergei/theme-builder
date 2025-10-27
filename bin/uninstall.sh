#!/bin/bash

# Usage: ./uninstall.sh <tool>

TOOL="$1"
EXTENSION="mazhugasergei.the-theme"

if [ -z "$TOOL" ]; then
  echo -e "\033[41m ERROR \033[0m No tool specified"
  exit 1
fi

if ! command -v "$TOOL" >/dev/null 2>&1; then
  echo -e "\033[41m ERROR \033[0m $TOOL not found"
  exit 1
fi

if ! "$TOOL" --uninstall-extension "$EXTENSION"; then
  echo -e "\033[41m ERROR \033[0m $TOOL uninstall failed"
  exit 1
fi
