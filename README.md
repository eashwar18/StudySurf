# StudySurf

## 📚 Project Overview

**StudySurf** is a full-stack web application designed to streamline the discovery and organization of educational resources and study materials. It provides users with a dedicated platform to efficiently manage content, fostering a more productive learning environment.

This project is built using the Django framework, focusing on a robust, template-driven architecture suitable for rapid development and scalable data management.

## ⚙️ Technologies Used

| Category                  | Technology              | Purpose                                                                         |
| :------------------------ | :---------------------- | :------------------------------------------------------------------------------ |
| **Backend Framework**     | **Django** (Python)     | High-level Python Web framework for rapid development and secure backend logic. |
| **Database**              | **SQLite**              | Used for local development and testing.                                         |
| **Database (Production)** | **PostgreSQL**          | Recommended for production deployment due to stability and scalability.         |
| **Web Server**            | **Gunicorn**            | Production WSGI HTTP server for serving the Django application.                 |
| **Frontend**              | HTML5, CSS3, JavaScript | Standard technologies used for template rendering and user interface.           |

## 💻 Local Setup and Installation

Follow these steps to get a copy of the project running on your local machine.

### Prerequisites

* Python 3.x installed (preferably 3.8+)
* `pip` (Python package installer)

### Installation Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/eashwar18/StudySurf.git
   cd StudySurf
   ```

2. **Create and Activate Virtual Environment:**

   ```bash
   # Create environment
   python -m venv venv

   # Activate (Linux/macOS)
   source venv/bin/activate

   # Activate (Windows)
   # venv\Scripts\activate
   ```

3. **Install Dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Database Setup:**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create a Superuser (Optional):**

   ```bash
   python manage.py createsuperuser
   ```

6. **Run the Server:**

   ```bash
   python manage.py runserver
   ```

   The application will be accessible locally at `http://127.0.0.1:8000/`.

## 📁 Project Structure

```
StudySurf/
├── manage.py
├── requirements.txt
├── StudySurf/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── apps/
│   └── [your Django apps]
├── templates/
│   └── [HTML templates]
├── static/
│   ├── css/
│   ├── js/
│   └── images/
└── media/
    └── [uploaded files]
```

 🚀 Deployment Considerations

This project is a traditional server-side rendered application, which means it requires specific full-stack hosting solutions:

* **Backend Hosting (Django):** The Django server must be hosted on a platform that supports Python web services (e.g., **Render**, **Heroku**, or a dedicated **VPS**). Netlify cannot run the Django server directly.
* **Database:** The production environment must use a robust external database service like **PostgreSQL**.
* **Static Files:** All frontend assets (CSS, JS) must be collected using `python manage.py collectstatic` and served efficiently.

 Recommended Hosting Platforms

<Cards columns={3}>
  <Card title="Render" href="https://render.com" icon="fa-cloud">
    Free tier available with automatic deployments from GitHub.
  </Card>

  <Card title="Heroku" href="https://heroku.com" icon="fa-server">
    Popular platform with extensive Django support and add-ons.
  </Card>

  <Card title="DigitalOcean" href="https://digitalocean.com" icon="fa-water">
    App Platform with scalable hosting solutions.
  </Card>
</Cards>

 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
SECRET_KEY=your-secret-key-here
DEBUG=False
ALLOWED_HOSTS=localhost,127.0.0.1,yourdomain.com
DATABASE_URL=your-database-url
```

# 🧪 Running Tests

To run the test suite:

```bash
python manage.py test
```

For coverage reports:

```bash
pip install coverage
coverage run --source='.' manage.py test
coverage report
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you encounter any issues or have questions about the project:

* Create an issue on GitHub
* Contact the project maintainer: [eashwar18](https://github.com/eashwar18)

***

**Note:** The local SQLite database file (`db.sqlite3`) and all sensitive configuration files are excluded from this repository via the `.gitignore` file for security purposes.
