# [Custom API Dashboard Community](https://cad.dino.icu/community)

A landing page for the [Custom API Dashboard App](https://github.com/leecheeyong/custom_api_dashboard_app) and a place for the community widgets library

## Add your custom widget

- Ensure that the API endpoint you provided is valid
- Look for existing widgets before creating, no duplicates
- No submission for APIs with explicit content
- Test your widget before submitting
- If you met all the requirements above, create `a-unique-id.json` in [`/widgets`](/widgets) with the content as following:

```json
{
  "id": "a-unique-id",
  "title": "Your Widget Title",
  "description": "Your Widget Description",
  "apiUrl": "https://your-api-endpoint.here",
  "backgroundColor": "#1e293b",
  "textColor": "#ffffff",
  "author": "Your Name",
  "category": "Developer, Weather, Finance, Lifestyle, Developer, News, Entertainment",
  "refreshInterval": 5000,
  "fields": [
    { "label": "Stars", "key": "stargazers_count", "type": "number" },
    { "label": "Forks", "key": "forks", "type": "number" }
  ]
}
```

## Contribution

Add your own custom widget by submitting a [pull request](https://github.com/leecheeyong/community-widgets/pulls). Contributions on the webpage is welcomed too.

## License

This project is available as an open source under the terms of the [MIT License](/LICENSE)
