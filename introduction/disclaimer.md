# Disclaimer

We are not responsible for bricked devices, dead hard drives, thermonuclear war, or you getting fired because you got a kernel panic and didn't save your work. You are responsible for reading everything carefully before you do anything. Do your research and ask for support if you have any questions or issues before trying random things on the internet because "it's the internet". If you do, YOU are choosing to follow random things on the internet, and if YOU point the finger at us for messing up your device, WE will laugh at you.

ok so so far the only thing that didn't work is code-tabs and api and simpletabs and math and some hints and page ref

{% hint style="info" %}
hint info
{% endhint %}

{% hint style="tip" %}
hint warning
{% endhint %}

{% hint style="danger" %}
hint danger
{% endhint %}

{% hint style="working" %}
hint check
{% endhint %}

| table title | table title | table title |
| :--- | :---: | :--- |
| content | content centered | content |

> quote
>
> quote

{% api "List App Pages", method="GET", url="https://www.magloft.com/api/portal/v1/app_pages/:app_id/page/:page" %}

This endpoint **returns** a list of all `app pages` that belong to the magazine

### Parameters:

| Name       | Type    | Desc                                                |
| :--------- | :------ | :-------------------------------------------------- |
| **app_id** | String  | App ID to list app pages for                        |
| **page**   | Integer | The page to list                                    |
| per_page   | Integer | Number of items to show per page                    |
| order_by   | Symbol  | Field to sort results by                            |
| order_dir  | Symbol  | Direction (asc, desc) to sort results by            |
| filter     | String  | Text filter to search pages by name, title and html |

### Response:

```json
{
  "id": 1234,
  "title": "Welcome to MagLoft"
}
```

{% endapi %}

{% api "List App Pages", method="POST", url="https://www.magloft.com/api/portal/v1/app_pages/:app_id/page/:page" %}

This endpoint **returns** a list of all `app pages` that belong to the magazine

### Parameters:

| Name       | Type    | Desc                                                |
| :--------- | :------ | :-------------------------------------------------- |
| **app_id** | String  | App ID to list app pages for                        |
| **page**   | Integer | The page to list                                    |
| per_page   | Integer | Number of items to show per page                    |
| order_by   | Symbol  | Field to sort results by                            |
| order_dir  | Symbol  | Direction (asc, desc) to sort results by            |
| filter     | String  | Text filter to search pages by name, title and html |

### Response:

```json
{
  "id": 1234,
  "title": "Welcome to MagLoft"
}
```

{% endapi %}

{% api "List App Pages", method="PUT", url="https://www.magloft.com/api/portal/v1/app_pages/:app_id/page/:page" %}

This endpoint **returns** a list of all `app pages` that belong to the magazine

### Parameters:

| Name       | Type    | Desc                                                |
| :--------- | :------ | :-------------------------------------------------- |
| **app_id** | String  | App ID to list app pages for                        |
| **page**   | Integer | The page to list                                    |
| per_page   | Integer | Number of items to show per page                    |
| order_by   | Symbol  | Field to sort results by                            |
| order_dir  | Symbol  | Direction (asc, desc) to sort results by            |
| filter     | String  | Text filter to search pages by name, title and html |

### Response:

```json
{
  "id": 1234,
  "title": "Welcome to MagLoft"
}
```

{% endapi %}

{% api "List App Pages", method="DELETE", url="https://www.magloft.com/api/portal/v1/app_pages/:app_id/page/:page" %}

This endpoint **returns** a list of all `app pages` that belong to the magazine

### Parameters:

| Name       | Type    | Desc                                                |
| :--------- | :------ | :-------------------------------------------------- |
| **app_id** | String  | App ID to list app pages for                        |
| **page**   | Integer | The page to list                                    |
| per_page   | Integer | Number of items to show per page                    |
| order_by   | Symbol  | Field to sort results by                            |
| order_dir  | Symbol  | Direction (asc, desc) to sort results by            |
| filter     | String  | Text filter to search pages by name, title and html |

### Response:

```json
{
  "id": 1234,
  "title": "Welcome to MagLoft"
}
```

{% endapi %}
{% tabs ree="First Tab", beep="second", eee="3rd" %}
{% content "ree" %}
```text
code
```
{% content "beep" %}
{% content "eee" %}
{% endtabs %}
