window.BENCHMARK_DATA = {
  "lastUpdate": 1781384168621,
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
      }
    ]
  }
}