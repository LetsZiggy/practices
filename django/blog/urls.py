from django.urls import path

from .views import (
	list_view,
	detail_view,
	create_view,
	update_view,
	delete_view,
)

app_name = "blog"
urlpatterns = [
	path("list/", list_view, name="list"),
	path("detail/<int:identifier>/", detail_view, name="detail"),
	path("create/", create_view, name="create"),
	path("update/<int:identifier>/", update_view, name="update"),
	path("delete/<int:identifier>/", delete_view, name="delete"),
]
