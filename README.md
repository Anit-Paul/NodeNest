# 📝 NoteNest(Online Note-Taking WebApp)

A secure, full-stack web application built with Django and Django Rest Framework for managing personal notes. It allows users to sign up, verify via OTP, log in, and perform CRUD operations on their notes.

## 🚀 Features

- User registration with **email and OTP verification**
- Token-based **authentication** (using DRF's built-in token system)
- Secure **login/logout** system
- Create, Read, Update, and Delete (CRUD) operations for personal notes
- Responsive user interface built with **HTML, CSS, and JavaScript**
- Optimized **MySQL** backend for scalable data storage

## 🛠 Tech Stack

- **Backend**: Python, Django, Django Rest Framework (DRF)
- **Database**: MySQL
- **Frontend**: HTML, CSS, JavaScript
- **Authentication**: DRF Token Authentication

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/online-notes-app.git
cd online-notes-app
```

### 2. Create and activate a virtual environment

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure MySQL database

Update your `settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'your_db_name',
        'USER': 'your_mysql_user',
        'PASSWORD': 'your_mysql_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

### 5. Run migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 6. Create superuser (optional)

```bash
python manage.py createsuperuser
```

### 7. Run the development server

```bash
python manage.py runserver
```

## ✅ Usage

- **Register** with email & OTP verification
- **Login** to receive your **token**
- Use the token in headers for authorized access to note APIs

```
Authorization: Token your_token_here
```

## 📁 API Endpoints

- `POST /register/` – Register a new user
- `POST /verify-otp/` – Verify email with OTP
- `POST /login/` – Authenticate user and receive token
- `GET /notes/` – Get list of notes (Auth required)
- `POST /notes/` – Create a new note (Auth required)
- `PUT /notes/<id>/` – Update an existing note (Auth required)
- `DELETE /notes/<id>/` – Delete a note (Auth required)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

