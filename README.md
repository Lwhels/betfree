Description:

Sick of sports betting and losing all of your money? Bet Free provides users with a valueless virtual currency to wager on NBA games. Users can place bets on upcoming games, view live NBA scores, read the latest NBA news, refer their friends, and even see how they stack up against other users on our leaderboard. 

Installation:

For IOS users:
To set up your environment, go into your terminal and run brew install node and brew install       watchman. 
If you do not have homebrew installed, navigate to their website and use their command to install homebrew and repeat the above step. 
To install Bet Free on your local device clone the repository using the git clone <url> command. 
Open a terminal and open the corresponding “betfree” directory, once inside of the directory run the “npm install --force” command. Once this download is complete, open the “ios” directory by running “cd ios” and run “pod install”. 
When this is complete you can try to run the app using “npx react-native run-ios --simulator=”[iPhone of choice]”", this command may prompt you to download Xcode if it is not already downloaded on your device if not already downloaded. 
Once Xcode is downloaded the above command will open the simulator where you can click the “betfree” app on the second page.

For Windows Users: Follow the link below to set up the environment for Windows to run the Android emulator: https://reactnative.dev/docs/environment-setup
Once you have the environment setup use “npm install --force” in betfree directory
If you are having problems go into “android” directory and run “./gradlew clean”

Navigating the App:

  When the app is first opened you will be prompted to either login or signup, first time users should click the signup button and fill in the prompted fields and click “Sign Up”. An alternate way to sign up for the first time is using the “Log in” button and click “Sign in with Google'' where you will be prompted to sign in using your gmail account. First time users will be given the option to enter a referral code giving their friend or family who referred them extra money. To use the referral just simply type your friends referral code into the popup and hit submit; if you don’t want to use the referral code just hit close. The referral code can be found at the bottom of the my profile page
 Users who have already signed up can login using the “Log in” button and either enter their email and password, or if they signed up using Google they should continue to sign in using the “Sign in with Google” button.
	Once you have logged in or signed up and completed the referral process you will be navigated to the home page. On the home page there are 7 buttons, including: “Place Bets”, “My Bets”, “News”, “Leaderboard”, “Scores”, “Profile”, and a menu button in the top right corner. 
The menu button is represented with 3 horizontal lines, and when clicked opens a drawer with two options, “MY PROFILE” and “LOG OUT”. This button is accessible on any of the pages in the app. To go back to the last page you were on after clicking the menu button click to the left of the menu “outside” of the drawer. Clicking the “LOG OUT” button will log you out of your account and navigate you back to the “Sign in” page. Clicking the “MY PROFILE” button has the same effect as clicking the home page’s “Profile” button navigating to a page containing your profile picture, name, account balance, email, and referral code. On the Profile page you can navigate to the home page by clicking the “Home” button in the top left corner or in the button center of the screen.
  The “Place Bets” button navigates to the page where you can place bets on today’s NBA games. Your balance is displayed at the top of the page so that you can tell how much money you have to bet. Clicking any of the blue buttons containing the team names, logos, and odds opens a pop up window where you can place a bet on the game. To do so first select a time by selecting one of their logos. Once you have selected a team click the box labeled “Stake:” and enter the amount of money you wish to bet, note the number must be a positive integer less than or equal to your balance. Below the number you imputed is the “Win” field which indicates the pay out of the bet you placed if you are correct. Once you have correctly filled out all of the fields you can click “Bet” to finalize your bet. If you wish to exit the popup simply click the “Close” button. On the Bets page you can navigate to the home page by clicking the “Home” button in the top left corner or in the button center of the screen.
	The “My Bets” button navigates to the page that displays your current bets. Here you can toggle between your active and past bets, recording how much money that you have won or lost for each bet.
	The “News” button opens the page titled “NBA Media” and contains five recent articles about the NBA that might affect your betting decisions. To open the article simply click the title of the article and you will be redirected outside of the app to the article. On the News page you can navigate to the home page by clicking the “Home” button in the top left corner or in the button center of the screen.
	The “Leaderboard” button opens the Leaderboard pages that contains a list of the top 10 players in one of two categories. The categories listed are “Highest Balance” and “Bet Wins” you can toggle to the other leaderboard by clicking the “Sort by:” button which will contain the category not currently being displayed. You can scroll down on the squares listing the players to see players lower down on the leaderboard. On the Leaderboard page you can navigate to the home page by clicking the “Home” button in the top left corner or in the button center of the screen.
	Finally the scores button navigates the user to the “Scores Page” the scores page lists 50 of the most recent scores around the NBA. You can scroll down to see older scores as well as click an orange button, or the “Filter” button. Clicking the “Filter” button opens a popup where you can select a team to filter the scores to only that team's scores.  You can scroll to pick any team you like or you can select “All” to see every team in the NBA. Once you have selected the team you wish to select “close” to close the popup. On the Scores page you can navigate to the home page by clicking the “Home” button in the top left corner or in the button center of the screen.


Works Cited:
Developers, Instamobile. “React Native Starter Kit - Free Download.” Instamobile, https://instamobile.io/app-templates/react-native-starter-kit-firebase/. 
“Firebase Documentation.” Google, Google, https://firebase.google.com/docs. 
JavaScript and HTML Dom Reference, https://www.w3schools.com/jsref/. 
“React Native · Learn Once, Write Anywhere.” React Native RSS, https://reactnative.dev/. 
“Object.keys() - Javascript: MDN.” JavaScript | MDN, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys. 
Stack Overflow, https://stackoverflow.com/. 
Vector Networks – Figma Help Center. https://help.figma.com/hc/en-us/articles/360040450213-Vector-Networks. 
