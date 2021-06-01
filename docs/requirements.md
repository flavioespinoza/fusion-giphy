# Web Coding Challenge

## Description

- Write a web app that uses the GIPHY image search API and shows the results in a 1-column scrollable view (like Instagram).
- The app must let users enter queries, such as "kittens".
- The app must support endless scrolling, automatically requesting and displaying more images when the user scrolls to the bottom of the view.
- We should be able to clone your code from Github, then run the project by following a README.

## Browser support

Do not worry about supporting very old browser versions. You can target browsers that support ES6 (ECMAScript 2015): Chrome 62, Safari 10, Firefox 54.

## Language and framework choices

You may choose to use a web framework (React, fusion.js, Vue, AngularJS).
You may choose to use any language commonly used in frontend development.

> Be prepared to justify your usage of languages and frameworks.

## Priorities

- A working app. Shortcuts are fine given the time constraints but be prepared to justify them and explain better solutions you would have implemented with more time.
- Clean code and application architecture. We would like you to write production-ready code that you would be proud to submit as an open source project, including a reassuring amount of unit test coverage.
- A README covering how to build and run your project.

> We expect this to take about 5 hours so no need to implement features that would obviously require more time than that. A concise and readable codebase that accomplishes all of the above requirements is the goal. Thus, do not try to do any more than is required to solve the problem cleanly. Finally, if you need more time to be proud of your delivered code, it's okay, just let us know how much time you spent on the project.

## Bonus (Optional)

If you have more time to invest in this challenge and want to go further, here is a list of things we would appreciate seeing:

- Toggle between 1-column and 3-column display. Allow the user to toggle between 1-column and 3-column views.
- Basic documentation. A README or other concise documentation that helps understand your code, design decisions, tradeoffs and things that you did not have time to implement this time, but would do so for a production app help us better understand your submission.

## GIPHY API

Try this call below:

<https://api.giphy.com/v1/gifs/search?api_key=CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6&q=kittens&limit=1&offset=0&rating=G&lang=en>

It returns a JSON object with a list of GIPHY image models. The `q` parameter should be replaced with the query that the user enters into the app.

Each GIPHY image model is defined as below (truncated for brevity):

```json
{
  "data": [
    {
      "type": "gif",
      "id": "g7YDlrD5YLqfe",
      "url": "https://giphy.com/gifs/cat-animal-g7YDlrD5YLqfe",
      "slug": "cat-animal-g7YDlrD5YLqfe",
      "bitly_gif_url": "http://gph.is/1gZHm29",
      "bitly_url": "http://gph.is/1gZHm29",
      "embed_url": "https://giphy.com/embed/g7YDlrD5YLqfe",
      "username": "",
      "source": "http://www.tumblr.com",
      "title": "Cat Kitten GIF",
      "rating": "g",
      "content_url": "",
      "source_tld": "www.tumblr.com",
      "source_post_url": "http://www.tumblr.com",
      "is_sticker": 0,
      "import_datetime": "2014-02-18 09:39:59",
      "trending_datetime": "1970-01-01 00:00:00",
      "images": {
        "original": {
          "height": "320",
          "width": "240",
          "size": "603847",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/giphy.gif",
          "mp4_size": "580188",
          "mp4": "https://media1.giphy.com/media/g7YDlrD5YLqfe/giphy.mp4",
          "webp_size": "295532",
          "webp": "https://media1.giphy.com/media/g7YDlrD5YLqfe/giphy.webp",
          "frames": "20",
          "hash": "5b796a9b8cb5f74aa1b229fca8c487fc"
        },
        "downsized": {
          "height": "320",
          "width": "240",
          "size": "603847",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/giphy.gif"
        },
        "downsized_large": {
          "height": "320",
          "width": "240",
          "size": "603847",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/giphy.gif"
        },
        "downsized_medium": {
          "height": "320",
          "width": "240",
          "size": "603847",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/giphy.gif"
        },
        "downsized_small": {
          "height": "320",
          "width": "240",
          "mp4_size": "146256",
          "mp4": "https://media1.giphy.com/media/g7YDlrD5YLqfe/giphy-downsized-small.mp4"
        },
        "downsized_still": {
          "height": "320",
          "width": "240",
          "size": "603847",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/giphy_s.gif"
        },
        "fixed_height": {
          "height": "200",
          "width": "150",
          "size": "225187",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/200.gif",
          "mp4_size": "39401",
          "mp4": "https://media1.giphy.com/media/g7YDlrD5YLqfe/200.mp4",
          "webp_size": "131894",
          "webp": "https://media1.giphy.com/media/g7YDlrD5YLqfe/200.webp"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "150",
          "size": "80743",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/200_d.gif",
          "webp_size": "51528",
          "webp": "https://media1.giphy.com/media/g7YDlrD5YLqfe/200_d.webp"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "75",
          "size": "69787",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/100.gif",
          "mp4_size": "12578",
          "mp4": "https://media1.giphy.com/media/g7YDlrD5YLqfe/100.mp4",
          "webp_size": "44870",
          "webp": "https://media1.giphy.com/media/g7YDlrD5YLqfe/100.webp"
        },
        "fixed_height_small_still": {
          "height": "100",
          "width": "75",
          "size": "5326",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/100_s.gif"
        },
        "fixed_height_still": {
          "height": "200",
          "width": "150",
          "size": "15351",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/200_s.gif"
        },
        "fixed_width": {
          "height": "267",
          "width": "200",
          "size": "383924",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/200w.gif",
          "mp4_size": "62712",
          "mp4": "https://media1.giphy.com/media/g7YDlrD5YLqfe/200w.mp4",
          "webp_size": "201080",
          "webp": "https://media1.giphy.com/media/g7YDlrD5YLqfe/200w.webp"
        },
        "fixed_width_downsampled": {
          "height": "267",
          "width": "200",
          "size": "140082",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/200w_d.gif",
          "webp_size": "80642",
          "webp": "https://media1.giphy.com/media/g7YDlrD5YLqfe/200w_d.webp"
        },
        "fixed_width_small": {
          "height": "134",
          "width": "100",
          "size": "115520",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/100w.gif",
          "mp4_size": "21038",
          "mp4": "https://media1.giphy.com/media/g7YDlrD5YLqfe/100w.mp4",
          "webp_size": "69694",
          "webp": "https://media1.giphy.com/media/g7YDlrD5YLqfe/100w.webp"
        },
        "fixed_width_small_still": {
          "height": "134",
          "width": "100",
          "size": "8841",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/100w_s.gif"
        },
        "fixed_width_still": {
          "height": "267",
          "width": "200",
          "size": "25175",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/200w_s.gif"
        },
        "looping": {
          "mp4_size": "1338097",
          "mp4": "https://media1.giphy.com/media/g7YDlrD5YLqfe/giphy-loop.mp4"
        },
        "original_still": {
          "height": "320",
          "width": "240",
          "size": "59559",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/giphy_s.gif"
        },
        "original_mp4": {
          "height": "640",
          "width": "480",
          "mp4_size": "580188",
          "mp4": "https://media1.giphy.com/media/g7YDlrD5YLqfe/giphy.mp4"
        },
        "preview": {
          "height": "186",
          "width": "139",
          "mp4_size": "17089",
          "mp4": "https://media1.giphy.com/media/g7YDlrD5YLqfe/giphy-preview.mp4"
        },
        "preview_gif": {
          "height": "100",
          "width": "75",
          "size": "49057",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/giphy-preview.gif"
        },
        "preview_webp": {
          "height": "146",
          "width": "110",
          "size": "39706",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/giphy-preview.webp"
        },
        "480w_still": {
          "height": "640",
          "width": "480",
          "size": "603847",
          "url": "https://media1.giphy.com/media/g7YDlrD5YLqfe/480w_s.jpg"
        }
      },
      "analytics_response_payload": "e=Z2lmX2lkPWc3WURsckQ1WUxxZmUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0yN2MzMTAzNXpsODJia3Y5eHByejkzcXR6andscGpvZnZ3MjNiYWR4ZHhmbjc4MG8mY3Q9Z2lm",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWc3WURsckQ1WUxxZmUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0yN2MzMTAzNXpsODJia3Y5eHByejkzcXR6andscGpvZnZ3MjNiYWR4ZHhmbjc4MG8mY3Q9Z2lm&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWc3WURsckQ1WUxxZmUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0yN2MzMTAzNXpsODJia3Y5eHByejkzcXR6andscGpvZnZ3MjNiYWR4ZHhmbjc4MG8mY3Q9Z2lm&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWc3WURsckQ1WUxxZmUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0yN2MzMTAzNXpsODJia3Y5eHByejkzcXR6andscGpvZnZ3MjNiYWR4ZHhmbjc4MG8mY3Q9Z2lm&action_type=SENT"
        }
      }
    }
  ],
  "pagination": {
    "total_count": 964,
    "count": 1,
    "offset": 0
  },
  "meta": {
    "status": 200,
    "msg": "OK",
    "response_id": "zl82bkv9xprz93qtzjwlpjofvw23badxdxfn780o"
  }
}
```

You should choose the image type you think best suits your application.

## Notes

More documentation about the search endpoint can be found here: https://developers.giphy.com/docs/#operation--gifs-search-get

If you have any problems with the Uber-specified API key (i.e. `CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6`), feel free to create an account and generate your own as described in the “Get an API key” section of the GIPHY Developer documentation at: <https://developers.giphy.com/docs/>
