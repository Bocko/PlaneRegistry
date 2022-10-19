# Plane Registry

This project was made as one of the homeworks for my Client Apps class in my 4th semester at [BME](https://www.bme.hu/?language=en).

# Features?

### Angular
*Achived with CryE- Angular*  
The project uses the angular framework to create a single page application. 

### Bootstrap
For formatting the pages the app uses the angular modul version of Bootstrap.

### In Memory DB
To hold the Entities that are displayed by default in the app, it uses a custom service to create a database and another one to simulate an API call to access the data.

# Test it!
You can try out this web app [here](https://bocko.github.io/PlaneRegistry).!

# Manual?

The app consists of three main pages. Two of these can be accessed from the navbar. The other opens from the menu.

### Menu
The first is the menu. Here are all the planes stored in the In-Memory DB. You can choose two types of layout, grid or list. If you click on one of the planes the app will take you to the selected planes page.

### Detailed view
This page is the third main page and the one that you can not access from the navbar. You can only view this page if you select a plane in the menu or by a directly link. Here you can see all of the details and extra pictures of a plane. Also if you want to delete a plane this is the place to do it. Before deleteing a confirmation window will pop up.

### Create new menu
This is the other page that can be opened from the navbar. Here you can create new planes. To create a new plane you must set all of the specs of the new plane, although a picture is not required. After filling out all the fields the create "Create Plane" button will be enabled and with the that creation process is finished.