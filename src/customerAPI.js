const customerOrders = [
    {
      "id": 66,
      "name": "Frankie Ziemann",
      "email": "clair@hettinger.io",
      "active": true,
      "orders": [
        {
          "id": 300,
          "customer_id": 66,
          "total": 561.88
        },
        {
          "id": 252,
          "customer_id": 66,
          "total": 725.22
        }
      ]
    },
    {
      "id": 67,
      "name": "Titus Rosenbaum",
      "email": "wes.farrell@leffler.co",
      "active": true,
      "orders": [
        {
          "id": 284,
          "customer_id": 67,
          "total": 131.44
        },
        {
          "id": 294,
          "customer_id": 67,
          "total": 831.34
        },
        {
          "id": 296,
          "customer_id": 67,
          "total": 640.76
        },
        {
          "id": 263,
          "customer_id": 67,
          "total": 587.22
        },
        {
          "id": 268,
          "customer_id": 67,
          "total": 748.25
        }
      ]
    },
    {
      "id": 68,
      "name": "Dr. Sharolyn Stiedemann",
      "email": "casey.waters@kautzer.co",
      "active": true,
      "orders": [
        {
          "id": 255,
          "customer_id": 68,
          "total": 819.55
        },
        {
          "id": 260,
          "customer_id": 68,
          "total": 298.11
        },
        {
          "id": 266,
          "customer_id": 68,
          "total": 658.81
        },
        {
          "id": 277,
          "customer_id": 68,
          "total": 940.06
        }
      ]
    },
    {
      "id": 69,
      "name": "Fr. Nicholas Fisher",
      "email": "madalene.rosenbaum@purdy.biz",
      "active": true,
      "orders": [
        {
          "id": 285,
          "customer_id": 69,
          "total": 770.12
        },
        {
          "id": 291,
          "customer_id": 69,
          "total": 508.53
        },
        {
          "id": 257,
          "customer_id": 69,
          "total": 630.51
        },
        {
          "id": 265,
          "customer_id": 69,
          "total": 249.26
        },
        {
          "id": 273,
          "customer_id": 69,
          "total": 815.63
        }
      ]
    },
    {
      "id": 70,
      "name": "Freddy Kautzer",
      "email": "siobhan_grady@osinski.com",
      "active": false,
      "orders": [
        {
          "id": 297,
          "customer_id": 70,
          "total": 450.18
        },
        {
          "id": 261,
          "customer_id": 70,
          "total": 729.07
        },
        {
          "id": 275,
          "customer_id": 70,
          "total": 243.52
        },
        {
          "id": 278,
          "customer_id": 70,
          "total": 461.66
        }
      ]
    },
    {
      "id": 71,
      "name": "Charlott Wilderman DVM",
      "email": "silva@lang.name",
      "active": false,
      "orders": [
        {
          "id": 286,
          "customer_id": 71,
          "total": 541.41
        },
        {
          "id": 292,
          "customer_id": 71,
          "total": 706.47
        },
        {
          "id": 271,
          "customer_id": 71,
          "total": 379.95
        }
      ]
    },
    {
      "id": 72,
      "name": "Annamaria Kutch",
      "email": "ken@balistreri.biz",
      "active": true,
      "orders": [
        {
          "id": 289,
          "customer_id": 72,
          "total": 776.41
        },
        {
          "id": 290,
          "customer_id": 72,
          "total": 249.56
        },
        {
          "id": 258,
          "customer_id": 72,
          "total": 870.34
        },
        {
          "id": 259,
          "customer_id": 72,
          "total": 587.67
        }
      ]
    },
    {
      "id": 73,
      "name": "Lita Conn",
      "email": "reynalda.zboncak@hodkiewicz-stokes.io",
      "active": false,
      "orders": [
        {
          "id": 281,
          "customer_id": 73,
          "total": 600.88
        },
        {
          "id": 283,
          "customer_id": 73,
          "total": 712.43
        },
        {
          "id": 299,
          "customer_id": 73,
          "total": 351.07
        },
        {
          "id": 253,
          "customer_id": 73,
          "total": 182.63
        },
        {
          "id": 264,
          "customer_id": 73,
          "total": 373.64
        },
        {
          "id": 270,
          "customer_id": 73,
          "total": 676.23
        },
        {
          "id": 279,
          "customer_id": 73,
          "total": 590.38
        }
      ]
    },
    {
      "id": 74,
      "name": "Dimple Friesen",
      "email": "heriberto.romaguera@sipes-schoen.info",
      "active": true,
      "orders": [
        {
          "id": 269,
          "customer_id": 74,
          "total": 989.94
        },
        {
          "id": 272,
          "customer_id": 74,
          "total": 567.68
        },
        {
          "id": 274,
          "customer_id": 74,
          "total": 243.64
        }
      ]
    },
    {
      "id": 75,
      "name": "Fr. Lucienne Batz",
      "email": "lorine@yost.biz",
      "active": true,
      "orders": [
        {
          "id": 276,
          "customer_id": 75,
          "total": 478.43
        },
        {
          "id": 280,
          "customer_id": 75,
          "total": 361.25
        }
      ]
    },
    {
      "id": 76,
      "name": "Mrs. Ngoc Rodriguez",
      "email": "gema.kutch@bernhard.net",
      "active": true,
      "orders": [
        {
          "id": 282,
          "customer_id": 76,
          "total": 182.07
        },
        {
          "id": 288,
          "customer_id": 76,
          "total": 980.81
        },
        {
          "id": 295,
          "customer_id": 76,
          "total": 242.81
        },
        {
          "id": 298,
          "customer_id": 76,
          "total": 112.05
        },
        {
          "id": 251,
          "customer_id": 76,
          "total": 329.52
        }
      ]
    },
    {
      "id": 77,
      "name": "Rep. Alline O'Hara",
      "email": "elroy.stehr@bauch.biz",
      "active": true,
      "orders": [
        {
          "id": 287,
          "customer_id": 77,
          "total": 218.55
        },
        {
          "id": 293,
          "customer_id": 77,
          "total": 299.07
        },
        {
          "id": 254,
          "customer_id": 77,
          "total": 703.43
        },
        {
          "id": 256,
          "customer_id": 77,
          "total": 866.34
        },
        {
          "id": 262,
          "customer_id": 77,
          "total": 348.29
        },
        {
          "id": 267,
          "customer_id": 77,
          "total": 230.17
        }
      ]
    }
  ]

//   console.log(customerOrders[0].orders[0].total)

  
  let ordersArray = []
  customerOrders.forEach(customer => {
    ordersArray.push(customer.orders)
  })
//   console.log(ordersArray)
  
  ordersArray.forEach((order, i) => {
      console.log(order.total) 
      i++
  })