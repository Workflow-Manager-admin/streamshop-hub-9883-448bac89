#!/bin/bash
cd /home/kavia/workspace/code-generation/streamshop-hub-9883-448bac89/streamshop_hub_backend
source venv/bin/activate
flake8 .
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

