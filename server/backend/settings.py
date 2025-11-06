"""
Django settings for the StudySurf project.

This file is configured for a Railway.app deployment.
"""

import os
from pathlib import Path
import dj_database_url  # This package reads the DATABASE_URL from Railway

# Build paths inside the project like this: BASE_DIR / 'subdir'.
# settings.py is in /server/backend/
# We set BASE_DIR to /server/ where manage.py is.
BASE_DIR = Path(__file__).resolve().parent.parent

# --- SECURITY ---
# Get the SECRET_KEY from Railway's environment variables.
# This is a critical production setting.
SECRET_KEY = os.environ.get('SECRET_KEY')

# DEBUG is set to False in production.
# You can add a DEBUG=True variable in Railway for testing.
DEBUG = os.environ.get('DEBUG', 'False') == 'True'


# --- HOSTS & CORS ---
# Configures your app for Railway's domains and allows your frontend to talk to it.

# This gets your app's public URL from Railway and adds it to the list.
ALLOWED_HOSTS = ['127.0.0.1', 'localhost']

RAILWAY_PUBLIC_DOMAIN = os.environ.get('RAILWAY_PUBLIC_DOMAIN')
if RAILWAY_PUBLIC_DOMAIN:
    ALLOWED_HOSTS.append(RAILWAY_PUBLIC_DOMAIN)

# This allows your frontend (on its own domain) to make API requests.
# For simplicity, we are allowing all origins.
CORS_ALLOW_ALL_ORIGINS = True


# --- APPLICATIONS ---
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # 3rd Party Apps (from your requirements.txt)
    'rest_framework',
    'rest_framework_simplejwt',
    'corsheaders',

    # Your Local Apps (e.g., 'api' folder)
    'api',
]

# --- MIDDLEWARE ---
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',  # CORS middleware (must be high up)
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# --- URLS ---
ROOT_URLCONF = 'backend.urls'

# --- TEMPLATES ---
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# --- WSGI ---
WSGI_APPLICATION = 'backend.wsgi.application'


# --- DATABASE ---
# This reads the DATABASE_URL environment variable from Railway.
# It automatically handles the connection to your Postgres database.
DATABASES = {
    'default': dj_database_url.config(
        conn_max_age=600,
        ssl_require=True  # Railway requires SSL
    )
}

# Fallback to local sqlite3 if DATABASE_URL is not set (for local dev)
if not DATABASES['default']:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }


# --- PASSWORD VALIDATION ---
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
D]

# --- INTERNATIONALIZATION ---
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True


# --- STATIC FILES (for Django Admin) ---
# This is for Django's `collectstatic` command.
STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')


# --- OTHER ---
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'