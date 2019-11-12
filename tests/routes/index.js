const tape = require('tape');

require('./getKeywords.test');
require('./getPlaceReviews.test');

tape.onFinish(() => process.exit(0));
