window.BENCHMARK_DATA = {
  "lastUpdate": 1781713849614,
  "repoUrl": "https://github.com/jane-street-immersion-program/jsip-exchange",
  "entries": {
    "Order book benchmark": [
      {
        "commit": {
          "author": {
            "email": "abauer@janestreet.com",
            "name": "Aaron Bauer",
            "username": "awilliambauer"
          },
          "committer": {
            "email": "abauer@janestreet.com",
            "name": "Aaron Bauer",
            "username": "awilliambauer"
          },
          "distinct": true,
          "id": "9793ef0599b0ad3ae76985f41377bfcd0ca61334",
          "message": "clean up opam download cache in docker image to keep size down",
          "timestamp": "2026-06-13T15:46:15-04:00",
          "tree_id": "1a13156a3e36e126f511d215e2ad445563086b5a",
          "url": "https://github.com/jane-street-immersion-program/jsip-exchange/commit/9793ef0599b0ad3ae76985f41377bfcd0ca61334"
        },
        "date": 1781384168388,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "find_match (n=10)",
            "value": 24.169306513329683,
            "unit": "ns"
          },
          {
            "name": "find_match (n=50)",
            "value": 24.596558570186897,
            "unit": "ns"
          },
          {
            "name": "find_match (n=100)",
            "value": 24.858382344185056,
            "unit": "ns"
          },
          {
            "name": "find_match (n=500)",
            "value": 25.538992814206484,
            "unit": "ns"
          },
          {
            "name": "find_match_miss (n=10)",
            "value": 126.76036003294328,
            "unit": "ns"
          },
          {
            "name": "find_match_miss (n=50)",
            "value": 579.3093203051748,
            "unit": "ns"
          },
          {
            "name": "find_match_miss (n=100)",
            "value": 1060.0671657960963,
            "unit": "ns"
          },
          {
            "name": "find_match_miss (n=500)",
            "value": 5282.886883391018,
            "unit": "ns"
          },
          {
            "name": "best_bid_offer (n=10)",
            "value": 224.1869307217165,
            "unit": "ns"
          },
          {
            "name": "best_bid_offer (n=50)",
            "value": 1035.0655944260818,
            "unit": "ns"
          },
          {
            "name": "best_bid_offer (n=100)",
            "value": 2216.0959552806107,
            "unit": "ns"
          },
          {
            "name": "best_bid_offer (n=500)",
            "value": 9918.355141783599,
            "unit": "ns"
          },
          {
            "name": "add+remove (n=100)",
            "value": 1653.8649220445266,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_cross (n=10)",
            "value": 1260.3760557243859,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_cross (n=50)",
            "value": 5457.586622168595,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_cross (n=100)",
            "value": 10899.071248154058,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_cross (n=500)",
            "value": 52365.20202133414,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_miss (n=10)",
            "value": 673.3051196945404,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_miss (n=50)",
            "value": 2901.241530863421,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_miss (n=100)",
            "value": 5703.952704291902,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_miss (n=500)",
            "value": 27756.274851530703,
            "unit": "ns"
          },
          {
            "name": "submit_sweep_10_levels",
            "value": 5595.8512839909245,
            "unit": "ns"
          },
          {
            "name": "submit_sweep_50_levels",
            "value": 86860.53299681786,
            "unit": "ns"
          },
          {
            "name": "submit_sweep_100_levels",
            "value": 328885.7715743715,
            "unit": "ns"
          },
          {
            "name": "find_match_alloc (n=100)",
            "value": 26.216310473139828,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "abauer@janestreet.com",
            "name": "Aaron Bauer",
            "username": "awilliambauer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f1d019f9ef08ad0f278510d7706ef082427275f",
          "message": "Mark some week 1 exercises as optional",
          "timestamp": "2026-06-17T12:26:41-04:00",
          "tree_id": "6dcfcef56ccaac939f96e89745df6177d1b9c681",
          "url": "https://github.com/jane-street-immersion-program/jsip-exchange/commit/0f1d019f9ef08ad0f278510d7706ef082427275f"
        },
        "date": 1781713849297,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "find_match (n=10)",
            "value": 21.43611200314105,
            "unit": "ns"
          },
          {
            "name": "find_match (n=50)",
            "value": 21.21731707543254,
            "unit": "ns"
          },
          {
            "name": "find_match (n=100)",
            "value": 21.259406316074248,
            "unit": "ns"
          },
          {
            "name": "find_match (n=500)",
            "value": 21.46986817991373,
            "unit": "ns"
          },
          {
            "name": "find_match_miss (n=10)",
            "value": 113.08457035754238,
            "unit": "ns"
          },
          {
            "name": "find_match_miss (n=50)",
            "value": 521.3737304420221,
            "unit": "ns"
          },
          {
            "name": "find_match_miss (n=100)",
            "value": 1081.9752715762925,
            "unit": "ns"
          },
          {
            "name": "find_match_miss (n=500)",
            "value": 5621.345593491914,
            "unit": "ns"
          },
          {
            "name": "best_bid_offer (n=10)",
            "value": 196.50880120477902,
            "unit": "ns"
          },
          {
            "name": "best_bid_offer (n=50)",
            "value": 930.5371189976896,
            "unit": "ns"
          },
          {
            "name": "best_bid_offer (n=100)",
            "value": 1829.8335182424669,
            "unit": "ns"
          },
          {
            "name": "best_bid_offer (n=500)",
            "value": 8996.18178441938,
            "unit": "ns"
          },
          {
            "name": "add+remove (n=100)",
            "value": 1421.9399501568273,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_cross (n=10)",
            "value": 1097.5085993532996,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_cross (n=50)",
            "value": 4664.527996773918,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_cross (n=100)",
            "value": 9031.148105725359,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_cross (n=500)",
            "value": 43744.700397377994,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_miss (n=10)",
            "value": 564.3481861280651,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_miss (n=50)",
            "value": 2394.7628113589562,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_miss (n=100)",
            "value": 4793.532213850208,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_miss (n=500)",
            "value": 22667.861524869953,
            "unit": "ns"
          },
          {
            "name": "submit_sweep_10_levels",
            "value": 4756.07612284141,
            "unit": "ns"
          },
          {
            "name": "submit_sweep_50_levels",
            "value": 73853.5075889474,
            "unit": "ns"
          },
          {
            "name": "submit_sweep_100_levels",
            "value": 278596.6602156991,
            "unit": "ns"
          },
          {
            "name": "find_match_alloc (n=100)",
            "value": 21.21582153117675,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}