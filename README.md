# Node-Based Pokemon Go Scanner for Twitter

Created by Chris Simmons ([endigodesign.com](endigodesign.com))

## Requirements

* Node.js
* NPM
* A [Twitter](http://www.twitter.com) account
* A [Pushbullet](https://www.pushbullet.com/) account

## Setup & Instructions

* Clone the repo and ensure you have both Node.js and NPM setup.
* `cd` into the project directory.
* Use `npm install` to install required NPM dependencies.
* Rename "creds-sample.js" to "creds.js", follow the instructions in the file, and fill in all credentials.
* View config.js to configure Twitter Stream IDs and Pokemon to search for.
* Use `npm start` to start the scanner.
* Press `Control + C` to exit the scanner.

## What It Does

Notifies you when a desired Pokemon has been mentioned in a tweet from a select list of Twitter users.

## How It Works

The app allows you to enter a list of Twitter Stream IDs (unique identifiers per each Twitter user), as well as a list of Pokemon you wish to be notified of. It opens a streamed connection to the Twitter API and watches for tweets from each provided Twitter user. If their tweet contains one of the Pokemon keywords entered, you'll receive a push notification from Pushbullet on all of your connected devices.

## Help & Support

Contact me at [chris@endigodesign.com](mailto:chris@endigodesign.com)