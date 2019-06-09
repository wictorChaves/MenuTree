<p align="center"><img src="https://raw.githubusercontent.com/wictorChaves/MenuTree/master/img/icon.png"></p>

# MenuTree

Transform a json array in a tree json structure

**How to use**

Import `parse-tree.js` code file

    <script src="./src/parse-tree.js"></script>
    
Then use the following function, and done!

    var tree = ParseTree(base);
    
#Example

Base Json

    [
        {
            "label": "FINANCEIRO",
            "id": 1,
            "topMenu": null,
            "subItems": []
        },
        {
            "label": "FINANCEIRO 2",
            "id": 50,
            "topMenu": 1,
            "subItems": []
        },
        {
            "label": "FINANCEIRO 3",
            "id": 60,
            "topMenu": 50,
            "subItems": []
        },
        {
            "label": "FINANCEIRO 4",
            "id": 523,
            "topMenu": 60,
            "subItems": []
        },
        {
            "label": "CADASTRO BÁSICO",
            "id": 2,
            "topMenu": null,
            "subItems": []
        },
        {
            "label": "AGÊNCIA",
            "id": 3,
            "topMenu": null,
            "subItems": []
        },
        {
            "label": "AGÊNCIA 2",
            "id": 55,
            "topMenu": 3,
            "subItems": []
        },
        {
            "label": "DEVEDOR",
            "id": 4,
            "topMenu": null,
            "subItems": []
        }
    ]
    
  Result Tree
  
    [
      {
          "label": "FINANCEIRO",
          "id": 1,
          "topMenu": null,
          "subItems": [
              {
                  "label": "FINANCEIRO 2",
                  "id": 50,
                  "topMenu": 1,
                  "subItems": [
                      {
                          "label": "FINANCEIRO 3",
                          "id": 60,
                          "topMenu": 50,
                          "subItems": [
                              {
                                  "label": "FINANCEIRO 4",
                                  "id": 523,
                                  "topMenu": 60,
                                  "subItems": []
                              }
                          ]
                      }
                  ]
              }
          ]
      },
      {
          "label": "CADASTRO BÁSICO",
          "id": 2,
          "topMenu": null,
          "subItems": []
      },
      {
          "label": "AGÊNCIA",
          "id": 3,
          "topMenu": null,
          "subItems": [
              {
                  "label": "AGÊNCIA 2",
                  "id": 55,
                  "topMenu": 3,
                  "subItems": []
              }
          ]
      },
      {
          "label": "DEVEDOR",
          "id": 4,
          "topMenu": null,
          "subItems": []
      }
    ]
