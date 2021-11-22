#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os
from app import app

if __name__ == '__main__':
    app.run(debug=True)
    # port = int(os.environ.get("PORT", 8080))
    # app.run('localhost', port=port)
