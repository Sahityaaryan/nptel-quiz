


# Checking the routes

- implementing full authentication [done]
- implementing partial authorization [done]
- adding courses [done]
- adding subtopic [done]
- adding quiz [done]
- fixing the payment over the site [done]
- creating revision hub [done]
- providing feature to review notes before taking quiz [done]
- fixing the production site errors -> redirection of the authenticated site, appliicatioin error of the "/all-courses" , how a user can access the "/courses" without login.
- adding the "demo" quiz part
- creating an UI for the admin login and process



# What exactly I have to do
- Fixing the entire payment flow.
- Make some component which can be accessed by the user to show the pdf only by a link of the google drive.
- Creating the entire "Revision Hub"
- Both courses and the Revision Hub should check whether the user is subscribed for the money or not. If not then show him "you need to subscribe"
- Fix the Errors



# Errors
1. (oauth errors) -> NEXTAUTH_URL

Environment variable NEXTAUTH_URL missing. Please set it in your .env file.
note

On Vercel deployments, we will read the VERCEL_URL environment variable, so you won't need to define NEXTAUTH_URL.

2.
