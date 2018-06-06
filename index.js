const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// clientId: 213413296626-ne4m4982cg7j83cvsq7r65je5rmuvje2.apps.googleusercontent.com
// clientSecret: HLJGrCmg5uULFaixBkVCwBeD
passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);