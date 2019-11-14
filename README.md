
## RescYou Me - A security phone app helping those in distress.

A security phone app that encourages the involvement of the app's community in helping those in distress.
It gives the user the ability to notify app users in his/her area to come to their aid, as well as play a fake ringtone, text his location, and call the police.

### Built With:

- React.js
- MobX
- Material UI
- Axios
- Node.js
- Express.js
- MongoDB
- Mongoose

### Features:

- By clicking on the "Help" button on the Emergency tab, the user sends a SOS push notification to the app's other users (regardless if the users are logged into the app or not), who are geographically located within the vicinity of the user needing help.
    - The text of the push notification states the user's name and location.
    - The push notification is sent with 2 buttons -- Accept and Decline.
    - If the receiving user presses Decline, the push notification disappears off screen.
    - If the receiving user presses Accept:
        - This user's phone automatically opens the app on his screen. 
        - The app will open to a new tab called "SOS", which will show:
            - The exact address of the distressed user.
            - A large map showing 2 points -- the location of the helping user and the location of the distressed user.
            - A button "Get Directions" below the map. When clicked, this button takes the helping user directly to google maps showing the directions between the helping user and the distressed user.
- By clicking on the "Call Police" button on the Emergency tab, the user's phone calls the police to notify that he is in trouble.
- By clicking on the "Location" button on the Emergency tab, the user automatically sends a text message with his name and location prefilled in the text field to his emergency contacts.
- By clicking on the "Ringtone" button on the Emergency tab, the user's phone plays a ringtone, giving the user the ability to pretend to answer a phonecall.
- Add & Delete emergency contacts.

<!-- ###### Login
![alt text](images/profile.png "Login")
###### Emergency
![alt text](images/bar_chart.png "Emergency")
###### Push Notification
![alt text](images/bar_chart.png "Push Notification")
###### SOS
![alt text](images/transactions.png "SOS")
###### Google Maps
![alt text](images/main.png "Google Maps")
###### User Profile
![alt text](images/pie_chart.png "User Profile") -->
