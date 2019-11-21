# SitSpot - Product Owner Guide
November - 2019

## Overview:
SitSpot was developed as a minimum viable product for [@KatiaSitSpot](https://github.com/KatiaSitspot), by a team from the 7th Cohort of Gaza Code Academy, GazaSkyGeeks.
All the code for this project is stored on Github.
As this is an open-source project, anyone can access the code.
https://github.com/GSG-G7/sitspot/

Some sensitive information has been withheld from public view. If you are trying to run this project on a local machine, you will need to create a file in the root of the project called `.env` This file will include the following keys:
`we'll figure where we are sending this`
## Airtable
Airtable is the spreadsheet where all the submitted new SitSpots and reviews are stored. It is in this spreadsheet that reviews and SitSpots will need to be moderated.

If you are a developer working on this site, here is a link to the customised API guide for the SitSpot Airtable:
https://airtable.com/appOMvA19d90E7vAU/api/docs#javascript/introduction

After logging in to Airtable, and scroll down to SitSpot 'workspace' and click on the Typeform Responses.
![](https://i.imgur.com/c1UuZxy.png)

From here you will see all of the incoming data!

#### **Be careful not to alter any of the data as you may not be able to recover it. There are also specific fields that are required and if they are removed or altered it will break the feed on the live version of the site. And if you ever change any multiple select options here or on Typeforms, you will need to break the integration from Typeform's connect, and reconnect them, or else you the typeform answers won't reach airtable and as a result won't reach the App**

Your tables are `places`, `stay`, `eat`, `shop`.

Your main view in all of these tables is **Grid view**.
![](https://i.imgur.com/YRLpToY.png)

You can click on it to see only Unapproved or Approved Sitspots or reviews.
![](https://i.imgur.com/YYYOex8.png)

Moderators and Admins are required to:
  - Review new SitSpots in the `place` table and make sure that the pieces of information are correct, occasionally correct typos and tick the `active` field. (Tip: use the Unapproved Sitspots view and this button to increase your readability)
  ![](https://i.imgur.com/Va8n8BS.png)
  - Review new `recommendations` that users submit through different Typeforms that go into the `stay`, `eat` and `shop` tables and make sure that the informations are correct, occasionally correct typos and tick the `active` field.

After finishing previously mentioned tasks and informations, all the website functions as intended, except 1 thing; you have to connect the `place` table, with the table the review is in!
you will need to select the same id.
This step is required a lot because it lets us search by the 7 keywords in the search:
  * near the `place_id` the field right to it is `place_relation`
  ![](https://i.imgur.com/WHGOfrs.png)
  * Click on the place_relation cell, click on the plus mark:
  ![](https://i.imgur.com/2U03GbW.png)
  * This will show a search menu:
  ![](https://i.imgur.com/UQrEFxN.png)
  * Type the same place_id, from the field next to it:
  ![](https://i.imgur.com/gdjC9ZL.png)
