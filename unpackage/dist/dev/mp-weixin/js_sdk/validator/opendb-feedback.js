"use strict";
const validator = {
  "user_id": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ]
  },
  "create_date": {
    "rules": [
      {
        "format": "timestamp"
      }
    ]
  },
  "content": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ]
  },
  "imgs": {
    "rules": [
      {
        "format": "array"
      }
    ]
  },
  "is_reply": {
    "rules": [
      {
        "format": "bool"
      }
    ]
  },
  "feedback_id": {
    "rules": [
      {
        "format": "string"
      }
    ]
  },
  "contact": {
    "rules": [
      {
        "format": "string"
      }
    ]
  },
  "mobile": {
    "rules": [
      {
        "format": "string"
      }
    ]
  },
  "reply_count": {
    "rules": [
      {
        "format": "int"
      }
    ]
  }
};
const enumConverter = {};
exports.enumConverter = enumConverter;
exports.validator = validator;
