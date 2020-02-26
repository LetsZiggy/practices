# Poll Application

#### Guides

[Written Guide](https://docs.djangoproject.com/en/1.11/intro/tutorial01/)

---

#### Setup

- Setup Django
	1. `cd <ROOT_FOLDER>/django`
	2. `python -m venv venv [--system-site-packages]`
		- `--system-site-packages` is optional
	3. `source venv/bin/activate`
	4. `pip install -r requirements.txt`
	5. Install poll app
		1. `cd <ROOT_FOLDER/django-polls>`
		2. `python setup.py sdist`
		3. ``pip install ../django-polls/dist/django-polls-0.1.tar.gz``
	6. `cd <ROOT_FOLDER>/django`
	7. Create and edit `.env`
		- Use `.env.example` as example
	8. `python manage.py makemigrations`
	9. `python manage.py migrate`
	10. `python manage.py createsuperuser`

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
