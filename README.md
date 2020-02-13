# Try Django

#### Guides

[Video Guide](https://www.youtube.com/playlist?list=PLEsfXFp6DpzTD1BD1aWNxS2Ep06vIkaeW) | [Repository](https://github.com/codingforentrepreneurs/Try-Django) | [Testing Tutorial](https://wsvincent.com/django-testing-tutorial/)

---

#### Setup

- Setup Django
	1. `cd <ROOT_FOLDER>/django`
	2. `python -m venv venv [--system-site-packages]`
		- `--system-site-packages` is optional
	3. `source venv/bin/activate`
	4. `pip install -r requirements.txt`
	5. Create and edit `.env`
		- Use `.env.example` as example
	6. `python manage.py migrate`
	7. `python manage.py createsuperuser`

---

#### Run

- Django
	1. `cd <ROOT_FOLDER>/django`
	2. `source venv/bin/activate`
	3. `python manage.py runserver`

---

#### Testing

- Django
	1. `cd <ROOT_FOLDER>/django`
	2. `source venv/bin/activate`
	3. `python manage.py test`
