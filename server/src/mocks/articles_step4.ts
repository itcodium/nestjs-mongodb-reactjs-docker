export default [
    {
        "created_at": "2020-12-08T19:46:09.000Z",
        "title": null,
        "url": null,
        "author": "schmichael",
        "points": null,
        "story_text": null,
        "comment_text": "Thanks that\u0026#x27;s great feedback and you\u0026#x27;re not alone in that desire.\u003cp\u003eWe do \u0026quot;small\u0026quot; users a pretty big disservice by effectively dismissing single-server deployments and jumping straight to \u0026quot;real\u0026quot; production deployments (3+ servers distinct from the nodes that run workloads).\u003cp\u003eWe have people who use Nomad locally as a systemd alternative. We have people who use single-scheduler-multiple-nodes clusters at home or at work, and it works quite well! If the scheduler crashes, work continues to run uninterrupted, so there\u0026#x27;s little reason not to start small and scale up.\u003cp\u003eThe problem is largely that it\u0026#x27;s tricky to separate out and accurately address these various personas. People looking for a systemd alternative are obviously highly technical and will likely figure everything out through experimentation. However, \u0026quot;small\u0026quot; cluster users need to be carefully educated on the differences between an HA cluster (3+ schedulers) and a single scheduler cluster.\u003cp\u003eNot only that, but we would need to automate testing for each of these recommendations to ensure changes don\u0026#x27;t break an official recommendation.",
        "num_comments": null,
        "story_id": 25349009,
        "story_title": "Nomad v1.0 release – workload orchestration",
        "story_url": "https://github.com/hashicorp/nomad/releases/tag/v1.0.0",
        "parent_id": 25350054,
        "created_at_i": 1607456769,
        "_tags": [
            "comment",
            "author_schmichael",
            "story_25349009"
        ],
        "objectID": "25350359",
        "_highlightResult": {
            "author": {
                "value": "schmichael",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "Thanks that's great feedback and you're not alone in that desire.\u003cp\u003eWe do \u0026quot;small\u0026quot; users a pretty big disservice by effectively dismissing single-server deployments and jumping straight to \u0026quot;real\u0026quot; production deployments (3+ servers distinct from the \u003cem\u003enodes\u003c/em\u003e that run workloads).\u003cp\u003eWe have people who use Nomad locally as a systemd alternative. We have people who use single-scheduler-multiple-\u003cem\u003enodes\u003c/em\u003e clusters at home or at work, and it works quite well! If the scheduler crashes, work continues to run uninterrupted, so there's little reason not to start small and scale up.\u003cp\u003eThe problem is largely that it's tricky to separate out and accurately address these various personas. People looking for a systemd alternative are obviously highly technical and will likely figure everything out through experimentation. However, \u0026quot;small\u0026quot; cluster users need to be carefully educated on the differences between an HA cluster (3+ schedulers) and a single scheduler cluster.\u003cp\u003eNot only that, but we would need to automate testing for each of these recommendations to ensure changes don't break an official recommendation.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Nomad v1.0 release – workload orchestration",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://github.com/hashicorp/nomad/releases/tag/v1.0.0",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
]