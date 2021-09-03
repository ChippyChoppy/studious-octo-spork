const customers = [
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
/*
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
  }
 */

const orders = [
    {
        "id": 281,
        "customer_id": 73,
        "total": 600.88,
        "order_items": [
            {
                "id": 7,
                "order_id": 281,
                "item_id": 186,
                "quantity": 6,
                "price": 56.04,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 282,
        "customer_id": 76,
        "total": 182.07,
        "order_items": [
            {
                "id": 25,
                "order_id": 282,
                "item_id": 156,
                "quantity": 4,
                "price": 35.17,
                "tax": 1.25
            },
            {
                "id": 80,
                "order_id": 282,
                "item_id": 422,
                "quantity": 9,
                "price": 31.93,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 283,
        "customer_id": 73,
        "total": 712.43,
        "order_items": [
            {
                "id": 79,
                "order_id": 283,
                "item_id": 249,
                "quantity": 9,
                "price": 92.19,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 284,
        "customer_id": 67,
        "total": 131.44,
        "order_items": [
            {
                "id": 5,
                "order_id": 284,
                "item_id": 260,
                "quantity": 6,
                "price": 20.13,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 285,
        "customer_id": 69,
        "total": 770.12,
        "order_items": [
            {
                "id": 18,
                "order_id": 285,
                "item_id": 226,
                "quantity": 6,
                "price": 56.37,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 286,
        "customer_id": 71,
        "total": 541.41,
        "order_items": [
            {
                "id": 12,
                "order_id": 286,
                "item_id": 271,
                "quantity": 6,
                "price": 73.57,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 287,
        "customer_id": 77,
        "total": 218.55,
        "order_items": [

        ]
    },
    {
        "id": 288,
        "customer_id": 76,
        "total": 980.81,
        "order_items": [
            {
                "id": 6,
                "order_id": 288,
                "item_id": 337,
                "quantity": 2,
                "price": 94.18,
                "tax": 1.25
            },
            {
                "id": 15,
                "order_id": 288,
                "item_id": 281,
                "quantity": 8,
                "price": 76.21,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 289,
        "customer_id": 72,
        "total": 776.41,
        "order_items": [

        ]
    },
    {
        "id": 290,
        "customer_id": 72,
        "total": 249.56,
        "order_items": [
            {
                "id": 50,
                "order_id": 290,
                "item_id": 427,
                "quantity": 7,
                "price": 86.93,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 291,
        "customer_id": 69,
        "total": 508.53,
        "order_items": [
            {
                "id": 42,
                "order_id": 291,
                "item_id": 338,
                "quantity": 7,
                "price": 12.74,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 292,
        "customer_id": 71,
        "total": 706.47,
        "order_items": [
            {
                "id": 49,
                "order_id": 292,
                "item_id": 485,
                "quantity": 2,
                "price": 67.08,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 293,
        "customer_id": 77,
        "total": 299.07,
        "order_items": [
            {
                "id": 1,
                "order_id": 293,
                "item_id": 310,
                "quantity": 6,
                "price": 52.95,
                "tax": 1.25
            },
            {
                "id": 27,
                "order_id": 293,
                "item_id": 297,
                "quantity": 10,
                "price": 17.72,
                "tax": 1.25
            },
            {
                "id": 53,
                "order_id": 293,
                "item_id": 289,
                "quantity": 1,
                "price": 44.25,
                "tax": 1.25
            },
            {
                "id": 66,
                "order_id": 293,
                "item_id": 253,
                "quantity": 1,
                "price": 57.42,
                "tax": 1.25
            },
            {
                "id": 72,
                "order_id": 293,
                "item_id": 477,
                "quantity": 6,
                "price": 19.69,
                "tax": 1.25
            },
            {
                "id": 77,
                "order_id": 293,
                "item_id": 422,
                "quantity": 9,
                "price": 24.25,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 294,
        "customer_id": 67,
        "total": 831.34,
        "order_items": [

        ]
    },
    {
        "id": 295,
        "customer_id": 76,
        "total": 242.81,
        "order_items": [
            {
                "id": 14,
                "order_id": 295,
                "item_id": 118,
                "quantity": 4,
                "price": 22.75,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 296,
        "customer_id": 67,
        "total": 640.76,
        "order_items": [
            {
                "id": 60,
                "order_id": 296,
                "item_id": 179,
                "quantity": 6,
                "price": 78.06,
                "tax": 1.25
            },
            {
                "id": 70,
                "order_id": 296,
                "item_id": 375,
                "quantity": 4,
                "price": 21.11,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 297,
        "customer_id": 70,
        "total": 450.18,
        "order_items": [
            {
                "id": 24,
                "order_id": 297,
                "item_id": 136,
                "quantity": 10,
                "price": 95.98,
                "tax": 1.25
            },
            {
                "id": 28,
                "order_id": 297,
                "item_id": 122,
                "quantity": 3,
                "price": 73.11,
                "tax": 1.25
            },
            {
                "id": 30,
                "order_id": 297,
                "item_id": 384,
                "quantity": 4,
                "price": 28.31,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 298,
        "customer_id": 76,
        "total": 112.05,
        "order_items": [
            {
                "id": 11,
                "order_id": 298,
                "item_id": 330,
                "quantity": 9,
                "price": 60.97,
                "tax": 1.25
            },
            {
                "id": 26,
                "order_id": 298,
                "item_id": 279,
                "quantity": 7,
                "price": 83.03,
                "tax": 1.25
            },
            {
                "id": 36,
                "order_id": 298,
                "item_id": 121,
                "quantity": 4,
                "price": 53.27,
                "tax": 1.25
            },
            {
                "id": 78,
                "order_id": 298,
                "item_id": 346,
                "quantity": 2,
                "price": 25.87,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 299,
        "customer_id": 73,
        "total": 351.07,
        "order_items": [
            {
                "id": 41,
                "order_id": 299,
                "item_id": 217,
                "quantity": 10,
                "price": 14.71,
                "tax": 1.25
            },
            {
                "id": 62,
                "order_id": 299,
                "item_id": 316,
                "quantity": 6,
                "price": 54.55,
                "tax": 1.25
            },
            {
                "id": 68,
                "order_id": 299,
                "item_id": 114,
                "quantity": 9,
                "price": 78.97,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 300,
        "customer_id": 66,
        "total": 561.88,
        "order_items": [
            {
                "id": 9,
                "order_id": 300,
                "item_id": 452,
                "quantity": 10,
                "price": 80.63,
                "tax": 1.25
            },
            {
                "id": 16,
                "order_id": 300,
                "item_id": 407,
                "quantity": 10,
                "price": 74.59,
                "tax": 1.25
            },
            {
                "id": 40,
                "order_id": 300,
                "item_id": 392,
                "quantity": 9,
                "price": 99.05,
                "tax": 1.25
            },
            {
                "id": 59,
                "order_id": 300,
                "item_id": 423,
                "quantity": 5,
                "price": 10.97,
                "tax": 1.25
            },
            {
                "id": 74,
                "order_id": 300,
                "item_id": 494,
                "quantity": 5,
                "price": 35.06,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 251,
        "customer_id": 76,
        "total": 329.52,
        "order_items": [

        ]
    },
    {
        "id": 252,
        "customer_id": 66,
        "total": 725.22,
        "order_items": [
            {
                "id": 44,
                "order_id": 252,
                "item_id": 500,
                "quantity": 4,
                "price": 65.16,
                "tax": 1.25
            },
            {
                "id": 54,
                "order_id": 252,
                "item_id": 281,
                "quantity": 8,
                "price": 19.52,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 253,
        "customer_id": 73,
        "total": 182.63,
        "order_items": [
            {
                "id": 34,
                "order_id": 253,
                "item_id": 479,
                "quantity": 5,
                "price": 13.75,
                "tax": 1.25
            },
            {
                "id": 67,
                "order_id": 253,
                "item_id": 116,
                "quantity": 7,
                "price": 49.32,
                "tax": 1.25
            },
            {
                "id": 75,
                "order_id": 253,
                "item_id": 295,
                "quantity": 10,
                "price": 42.99,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 254,
        "customer_id": 77,
        "total": 703.43,
        "order_items": [

        ]
    },
    {
        "id": 255,
        "customer_id": 68,
        "total": 819.55,
        "order_items": [
            {
                "id": 31,
                "order_id": 255,
                "item_id": 437,
                "quantity": 2,
                "price": 26.56,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 256,
        "customer_id": 77,
        "total": 866.34,
        "order_items": [

        ]
    },
    {
        "id": 257,
        "customer_id": 69,
        "total": 630.51,
        "order_items": [
            {
                "id": 4,
                "order_id": 257,
                "item_id": 478,
                "quantity": 7,
                "price": 76.86,
                "tax": 1.25
            },
            {
                "id": 38,
                "order_id": 257,
                "item_id": 500,
                "quantity": 10,
                "price": 55.13,
                "tax": 1.25
            },
            {
                "id": 45,
                "order_id": 257,
                "item_id": 425,
                "quantity": 9,
                "price": 29.97,
                "tax": 1.25
            },
            {
                "id": 48,
                "order_id": 257,
                "item_id": 181,
                "quantity": 10,
                "price": 49.18,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 258,
        "customer_id": 72,
        "total": 870.34,
        "order_items": [

        ]
    },
    {
        "id": 259,
        "customer_id": 72,
        "total": 587.67,
        "order_items": [
            {
                "id": 47,
                "order_id": 259,
                "item_id": 231,
                "quantity": 8,
                "price": 65.56,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 260,
        "customer_id": 68,
        "total": 298.11,
        "order_items": [
            {
                "id": 32,
                "order_id": 260,
                "item_id": 245,
                "quantity": 3,
                "price": 76.16,
                "tax": 1.25
            },
            {
                "id": 58,
                "order_id": 260,
                "item_id": 216,
                "quantity": 4,
                "price": 21.32,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 261,
        "customer_id": 70,
        "total": 729.07,
        "order_items": [
            {
                "id": 64,
                "order_id": 261,
                "item_id": 297,
                "quantity": 4,
                "price": 65.43,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 262,
        "customer_id": 77,
        "total": 348.29,
        "order_items": [
            {
                "id": 17,
                "order_id": 262,
                "item_id": 321,
                "quantity": 3,
                "price": 23.34,
                "tax": 1.25
            },
            {
                "id": 23,
                "order_id": 262,
                "item_id": 245,
                "quantity": 2,
                "price": 45.53,
                "tax": 1.25
            },
            {
                "id": 39,
                "order_id": 262,
                "item_id": 418,
                "quantity": 7,
                "price": 32.61,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 263,
        "customer_id": 67,
        "total": 587.22,
        "order_items": [
            {
                "id": 8,
                "order_id": 263,
                "item_id": 245,
                "quantity": 2,
                "price": 52.17,
                "tax": 1.25
            },
            {
                "id": 13,
                "order_id": 263,
                "item_id": 123,
                "quantity": 7,
                "price": 44.36,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 264,
        "customer_id": 73,
        "total": 373.64,
        "order_items": [
            {
                "id": 21,
                "order_id": 264,
                "item_id": 230,
                "quantity": 10,
                "price": 77.36,
                "tax": 1.25
            },
            {
                "id": 35,
                "order_id": 264,
                "item_id": 232,
                "quantity": 1,
                "price": 22.62,
                "tax": 1.25
            },
            {
                "id": 56,
                "order_id": 264,
                "item_id": 352,
                "quantity": 10,
                "price": 54.17,
                "tax": 1.25
            },
            {
                "id": 61,
                "order_id": 264,
                "item_id": 295,
                "quantity": 7,
                "price": 20.33,
                "tax": 1.25
            },
            {
                "id": 71,
                "order_id": 264,
                "item_id": 326,
                "quantity": 8,
                "price": 37.14,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 265,
        "customer_id": 69,
        "total": 249.26,
        "order_items": [
            {
                "id": 51,
                "order_id": 265,
                "item_id": 130,
                "quantity": 3,
                "price": 57.53,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 266,
        "customer_id": 68,
        "total": 658.81,
        "order_items": [
            {
                "id": 2,
                "order_id": 266,
                "item_id": 434,
                "quantity": 3,
                "price": 42.66,
                "tax": 1.25
            },
            {
                "id": 19,
                "order_id": 266,
                "item_id": 306,
                "quantity": 4,
                "price": 96.81,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 267,
        "customer_id": 77,
        "total": 230.17,
        "order_items": [
            {
                "id": 20,
                "order_id": 267,
                "item_id": 247,
                "quantity": 3,
                "price": 92.45,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 268,
        "customer_id": 67,
        "total": 748.25,
        "order_items": [
            {
                "id": 3,
                "order_id": 268,
                "item_id": 202,
                "quantity": 7,
                "price": 81.05,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 269,
        "customer_id": 74,
        "total": 989.94,
        "order_items": [
            {
                "id": 29,
                "order_id": 269,
                "item_id": 422,
                "quantity": 8,
                "price": 39.45,
                "tax": 1.25
            },
            {
                "id": 76,
                "order_id": 269,
                "item_id": 335,
                "quantity": 4,
                "price": 12.71,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 270,
        "customer_id": 73,
        "total": 676.23,
        "order_items": [

        ]
    },
    {
        "id": 271,
        "customer_id": 71,
        "total": 379.95,
        "order_items": [

        ]
    },
    {
        "id": 272,
        "customer_id": 74,
        "total": 567.68,
        "order_items": [
            {
                "id": 10,
                "order_id": 272,
                "item_id": 116,
                "quantity": 3,
                "price": 51.07,
                "tax": 1.25
            },
            {
                "id": 63,
                "order_id": 272,
                "item_id": 372,
                "quantity": 1,
                "price": 96.46,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 273,
        "customer_id": 69,
        "total": 815.63,
        "order_items": [
            {
                "id": 22,
                "order_id": 273,
                "item_id": 182,
                "quantity": 7,
                "price": 99.49,
                "tax": 1.25
            },
            {
                "id": 33,
                "order_id": 273,
                "item_id": 249,
                "quantity": 6,
                "price": 60.01,
                "tax": 1.25
            },
            {
                "id": 46,
                "order_id": 273,
                "item_id": 331,
                "quantity": 6,
                "price": 49.47,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 274,
        "customer_id": 74,
        "total": 243.64,
        "order_items": [

        ]
    },
    {
        "id": 275,
        "customer_id": 70,
        "total": 243.52,
        "order_items": [
            {
                "id": 43,
                "order_id": 275,
                "item_id": 247,
                "quantity": 8,
                "price": 13.11,
                "tax": 1.25
            },
            {
                "id": 52,
                "order_id": 275,
                "item_id": 313,
                "quantity": 4,
                "price": 27.26,
                "tax": 1.25
            },
            {
                "id": 65,
                "order_id": 275,
                "item_id": 400,
                "quantity": 8,
                "price": 26.49,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 276,
        "customer_id": 75,
        "total": 478.43,
        "order_items": [
            {
                "id": 37,
                "order_id": 276,
                "item_id": 243,
                "quantity": 1,
                "price": 86.45,
                "tax": 1.25
            },
            {
                "id": 55,
                "order_id": 276,
                "item_id": 193,
                "quantity": 8,
                "price": 16.71,
                "tax": 1.25
            },
            {
                "id": 57,
                "order_id": 276,
                "item_id": 411,
                "quantity": 1,
                "price": 56.92,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 277,
        "customer_id": 68,
        "total": 940.06,
        "order_items": [

        ]
    },
    {
        "id": 278,
        "customer_id": 70,
        "total": 461.66,
        "order_items": [
            {
                "id": 69,
                "order_id": 278,
                "item_id": 389,
                "quantity": 3,
                "price": 64.65,
                "tax": 1.25
            },
            {
                "id": 73,
                "order_id": 278,
                "item_id": 259,
                "quantity": 6,
                "price": 32.33,
                "tax": 1.25
            }
        ]
    },
    {
        "id": 279,
        "customer_id": 73,
        "total": 590.38,
        "order_items": [

        ]
    },
    {
        "id": 280,
        "customer_id": 75,
        "total": 361.25,
        "order_items": [

        ]
    }
]
/*   
{
  "id": 282,
  "customer_id": 76,
  "total": 182.07,
  "order_items": [
    {
      "id": 25,
      "order_id": 282,
      "item_id": 156,
      "quantity": 4,
      "price": 35.17,
      "tax": 1.25
    },
    {
      "id": 80,
      "order_id": 282,
      "item_id": 422,
      "quantity": 9,
      "price": 31.93,
      "tax": 1.25
    }
  ]
}
*/

const orderItems = [
    {
        "id": 1,
        "order_id": 293,
        "item_id": 310,
        "quantity": 6,
        "price": 52.95,
        "tax": 1.25
    },
    {
        "id": 2,
        "order_id": 266,
        "item_id": 434,
        "quantity": 3,
        "price": 42.66,
        "tax": 1.25
    },
    {
        "id": 3,
        "order_id": 268,
        "item_id": 202,
        "quantity": 7,
        "price": 81.05,
        "tax": 1.25
    },
    {
        "id": 4,
        "order_id": 257,
        "item_id": 478,
        "quantity": 7,
        "price": 76.86,
        "tax": 1.25
    },
    {
        "id": 5,
        "order_id": 284,
        "item_id": 260,
        "quantity": 6,
        "price": 20.13,
        "tax": 1.25
    },
    {
        "id": 6,
        "order_id": 288,
        "item_id": 337,
        "quantity": 2,
        "price": 94.18,
        "tax": 1.25
    },
    {
        "id": 7,
        "order_id": 281,
        "item_id": 186,
        "quantity": 6,
        "price": 56.04,
        "tax": 1.25
    },
    {
        "id": 8,
        "order_id": 263,
        "item_id": 245,
        "quantity": 2,
        "price": 52.17,
        "tax": 1.25
    },
    {
        "id": 9,
        "order_id": 300,
        "item_id": 452,
        "quantity": 10,
        "price": 80.63,
        "tax": 1.25
    },
    {
        "id": 10,
        "order_id": 272,
        "item_id": 116,
        "quantity": 3,
        "price": 51.07,
        "tax": 1.25
    },
    {
        "id": 11,
        "order_id": 298,
        "item_id": 330,
        "quantity": 9,
        "price": 60.97,
        "tax": 1.25
    },
    {
        "id": 12,
        "order_id": 286,
        "item_id": 271,
        "quantity": 6,
        "price": 73.57,
        "tax": 1.25
    },
    {
        "id": 13,
        "order_id": 263,
        "item_id": 123,
        "quantity": 7,
        "price": 44.36,
        "tax": 1.25
    },
    {
        "id": 14,
        "order_id": 295,
        "item_id": 118,
        "quantity": 4,
        "price": 22.75,
        "tax": 1.25
    },
    {
        "id": 15,
        "order_id": 288,
        "item_id": 281,
        "quantity": 8,
        "price": 76.21,
        "tax": 1.25
    },
    {
        "id": 16,
        "order_id": 300,
        "item_id": 407,
        "quantity": 10,
        "price": 74.59,
        "tax": 1.25
    },
    {
        "id": 17,
        "order_id": 262,
        "item_id": 321,
        "quantity": 3,
        "price": 23.34,
        "tax": 1.25
    },
    {
        "id": 18,
        "order_id": 285,
        "item_id": 226,
        "quantity": 6,
        "price": 56.37,
        "tax": 1.25
    },
    {
        "id": 19,
        "order_id": 266,
        "item_id": 306,
        "quantity": 4,
        "price": 96.81,
        "tax": 1.25
    },
    {
        "id": 20,
        "order_id": 267,
        "item_id": 247,
        "quantity": 3,
        "price": 92.45,
        "tax": 1.25
    },
    {
        "id": 21,
        "order_id": 264,
        "item_id": 230,
        "quantity": 10,
        "price": 77.36,
        "tax": 1.25
    },
    {
        "id": 22,
        "order_id": 273,
        "item_id": 182,
        "quantity": 7,
        "price": 99.49,
        "tax": 1.25
    },
    {
        "id": 23,
        "order_id": 262,
        "item_id": 245,
        "quantity": 2,
        "price": 45.53,
        "tax": 1.25
    },
    {
        "id": 24,
        "order_id": 297,
        "item_id": 136,
        "quantity": 10,
        "price": 95.98,
        "tax": 1.25
    },
    {
        "id": 25,
        "order_id": 282,
        "item_id": 156,
        "quantity": 4,
        "price": 35.17,
        "tax": 1.25
    },
    {
        "id": 26,
        "order_id": 298,
        "item_id": 279,
        "quantity": 7,
        "price": 83.03,
        "tax": 1.25
    },
    {
        "id": 27,
        "order_id": 293,
        "item_id": 297,
        "quantity": 10,
        "price": 17.72,
        "tax": 1.25
    },
    {
        "id": 28,
        "order_id": 297,
        "item_id": 122,
        "quantity": 3,
        "price": 73.11,
        "tax": 1.25
    },
    {
        "id": 29,
        "order_id": 269,
        "item_id": 422,
        "quantity": 8,
        "price": 39.45,
        "tax": 1.25
    },
    {
        "id": 30,
        "order_id": 297,
        "item_id": 384,
        "quantity": 4,
        "price": 28.31,
        "tax": 1.25
    },
    {
        "id": 31,
        "order_id": 255,
        "item_id": 437,
        "quantity": 2,
        "price": 26.56,
        "tax": 1.25
    },
    {
        "id": 32,
        "order_id": 260,
        "item_id": 245,
        "quantity": 3,
        "price": 76.16,
        "tax": 1.25
    },
    {
        "id": 33,
        "order_id": 273,
        "item_id": 249,
        "quantity": 6,
        "price": 60.01,
        "tax": 1.25
    },
    {
        "id": 34,
        "order_id": 253,
        "item_id": 479,
        "quantity": 5,
        "price": 13.75,
        "tax": 1.25
    },
    {
        "id": 35,
        "order_id": 264,
        "item_id": 232,
        "quantity": 1,
        "price": 22.62,
        "tax": 1.25
    },
    {
        "id": 36,
        "order_id": 298,
        "item_id": 121,
        "quantity": 4,
        "price": 53.27,
        "tax": 1.25
    },
    {
        "id": 37,
        "order_id": 276,
        "item_id": 243,
        "quantity": 1,
        "price": 86.45,
        "tax": 1.25
    },
    {
        "id": 38,
        "order_id": 257,
        "item_id": 500,
        "quantity": 10,
        "price": 55.13,
        "tax": 1.25
    },
    {
        "id": 39,
        "order_id": 262,
        "item_id": 418,
        "quantity": 7,
        "price": 32.61,
        "tax": 1.25
    },
    {
        "id": 40,
        "order_id": 300,
        "item_id": 392,
        "quantity": 9,
        "price": 99.05,
        "tax": 1.25
    },
    {
        "id": 41,
        "order_id": 299,
        "item_id": 217,
        "quantity": 10,
        "price": 14.71,
        "tax": 1.25
    },
    {
        "id": 42,
        "order_id": 291,
        "item_id": 338,
        "quantity": 7,
        "price": 12.74,
        "tax": 1.25
    },
    {
        "id": 43,
        "order_id": 275,
        "item_id": 247,
        "quantity": 8,
        "price": 13.11,
        "tax": 1.25
    },
    {
        "id": 44,
        "order_id": 252,
        "item_id": 500,
        "quantity": 4,
        "price": 65.16,
        "tax": 1.25
    },
    {
        "id": 45,
        "order_id": 257,
        "item_id": 425,
        "quantity": 9,
        "price": 29.97,
        "tax": 1.25
    },
    {
        "id": 46,
        "order_id": 273,
        "item_id": 331,
        "quantity": 6,
        "price": 49.47,
        "tax": 1.25
    },
    {
        "id": 47,
        "order_id": 259,
        "item_id": 231,
        "quantity": 8,
        "price": 65.56,
        "tax": 1.25
    },
    {
        "id": 48,
        "order_id": 257,
        "item_id": 181,
        "quantity": 10,
        "price": 49.18,
        "tax": 1.25
    },
    {
        "id": 49,
        "order_id": 292,
        "item_id": 485,
        "quantity": 2,
        "price": 67.08,
        "tax": 1.25
    },
    {
        "id": 50,
        "order_id": 290,
        "item_id": 427,
        "quantity": 7,
        "price": 86.93,
        "tax": 1.25
    },
    {
        "id": 51,
        "order_id": 265,
        "item_id": 130,
        "quantity": 3,
        "price": 57.53,
        "tax": 1.25
    },
    {
        "id": 52,
        "order_id": 275,
        "item_id": 313,
        "quantity": 4,
        "price": 27.26,
        "tax": 1.25
    },
    {
        "id": 53,
        "order_id": 293,
        "item_id": 289,
        "quantity": 1,
        "price": 44.25,
        "tax": 1.25
    },
    {
        "id": 54,
        "order_id": 252,
        "item_id": 281,
        "quantity": 8,
        "price": 19.52,
        "tax": 1.25
    },
    {
        "id": 55,
        "order_id": 276,
        "item_id": 193,
        "quantity": 8,
        "price": 16.71,
        "tax": 1.25
    },
    {
        "id": 56,
        "order_id": 264,
        "item_id": 352,
        "quantity": 10,
        "price": 54.17,
        "tax": 1.25
    },
    {
        "id": 57,
        "order_id": 276,
        "item_id": 411,
        "quantity": 1,
        "price": 56.92,
        "tax": 1.25
    },
    {
        "id": 58,
        "order_id": 260,
        "item_id": 216,
        "quantity": 4,
        "price": 21.32,
        "tax": 1.25
    },
    {
        "id": 59,
        "order_id": 300,
        "item_id": 423,
        "quantity": 5,
        "price": 10.97,
        "tax": 1.25
    },
    {
        "id": 60,
        "order_id": 296,
        "item_id": 179,
        "quantity": 6,
        "price": 78.06,
        "tax": 1.25
    },
    {
        "id": 61,
        "order_id": 264,
        "item_id": 295,
        "quantity": 7,
        "price": 20.33,
        "tax": 1.25
    },
    {
        "id": 62,
        "order_id": 299,
        "item_id": 316,
        "quantity": 6,
        "price": 54.55,
        "tax": 1.25
    },
    {
        "id": 63,
        "order_id": 272,
        "item_id": 372,
        "quantity": 1,
        "price": 96.46,
        "tax": 1.25
    },
    {
        "id": 64,
        "order_id": 261,
        "item_id": 297,
        "quantity": 4,
        "price": 65.43,
        "tax": 1.25
    },
    {
        "id": 65,
        "order_id": 275,
        "item_id": 400,
        "quantity": 8,
        "price": 26.49,
        "tax": 1.25
    },
    {
        "id": 66,
        "order_id": 293,
        "item_id": 253,
        "quantity": 1,
        "price": 57.42,
        "tax": 1.25
    },
    {
        "id": 67,
        "order_id": 253,
        "item_id": 116,
        "quantity": 7,
        "price": 49.32,
        "tax": 1.25
    },
    {
        "id": 68,
        "order_id": 299,
        "item_id": 114,
        "quantity": 9,
        "price": 78.97,
        "tax": 1.25
    },
    {
        "id": 69,
        "order_id": 278,
        "item_id": 389,
        "quantity": 3,
        "price": 64.65,
        "tax": 1.25
    },
    {
        "id": 70,
        "order_id": 296,
        "item_id": 375,
        "quantity": 4,
        "price": 21.11,
        "tax": 1.25
    },
    {
        "id": 71,
        "order_id": 264,
        "item_id": 326,
        "quantity": 8,
        "price": 37.14,
        "tax": 1.25
    },
    {
        "id": 72,
        "order_id": 293,
        "item_id": 477,
        "quantity": 6,
        "price": 19.69,
        "tax": 1.25
    },
    {
        "id": 73,
        "order_id": 278,
        "item_id": 259,
        "quantity": 6,
        "price": 32.33,
        "tax": 1.25
    },
    {
        "id": 74,
        "order_id": 300,
        "item_id": 494,
        "quantity": 5,
        "price": 35.06,
        "tax": 1.25
    },
    {
        "id": 75,
        "order_id": 253,
        "item_id": 295,
        "quantity": 10,
        "price": 42.99,
        "tax": 1.25
    },
    {
        "id": 76,
        "order_id": 269,
        "item_id": 335,
        "quantity": 4,
        "price": 12.71,
        "tax": 1.25
    },
    {
        "id": 77,
        "order_id": 293,
        "item_id": 422,
        "quantity": 9,
        "price": 24.25,
        "tax": 1.25
    },
    {
        "id": 78,
        "order_id": 298,
        "item_id": 346,
        "quantity": 2,
        "price": 25.87,
        "tax": 1.25
    },
    {
        "id": 79,
        "order_id": 283,
        "item_id": 249,
        "quantity": 9,
        "price": 92.19,
        "tax": 1.25
    },
    {
        "id": 80,
        "order_id": 282,
        "item_id": 422,
        "quantity": 9,
        "price": 31.93,
        "tax": 1.25
    }
]

/* ---- Top Ten Customers --- */
const customerTotals = {}

const sortCustomerTotals = () => {
    orders.forEach((order) => {
        let key = order.customer_id
        customerTotals[key] ? customerTotals[key] += order.total : customerTotals[key] = order.total
    })
    return Object.entries(customerTotals).sort((a, b) => b[1] - a[1])
}

const getTopTenCustomers = () => {
    let sortedCustomers = sortCustomerTotals()
    let topTenCustomers = []
    for (let i = 0; i < 10; i++) {
        let j = 0
        while (j < customers.length) {
            if (sortedCustomers[i][0] == customers[j].id) {
                topTenCustomers[i] = {
                    name: customers[j].name,
                    customer_id: customers[j].id,
                    total: sortedCustomers[i][1]
                }
            }
            j++
        }
    }
    return topTenCustomers
}
console.log(getTopTenCustomers())

/* ---- Top Ten Items --- */
const orderedItemTotals = {};
const sortItemsByPopularity = () => {
    orderItems.forEach(item => {
        let key = item.item_id
        orderedItemTotals[key] ? orderedItemTotals[key] += item.quantity : orderedItemTotals[key] = item.quantity
    })
    return Object.entries(orderedItemTotals).sort((a, b) => b[1] - a[1])
}
const getTopTenItems = () => {
    const sortedItems = sortItemsByPopularity();
    const topTenItems = []
    let i = 0
    while (topTenItems.length < 10) {
        topTenItems[i] = [sortedItems[i]]
        i++
    }
    // return topTenItems
    return topTenItems
}
console.log(getTopTenItems())
