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
    {
        "created_at": "2020-12-05T09:26:11.000Z",
        "title": null,
        "url": null,
        "author": "Existenceblinks",
        "points": null,
        "story_text": null,
        "comment_text": "Why backend of web development is narrow down to nodejs server? How about people who use Rust\u0026#x2F;Python\u0026#x2F;Ruby\u0026#x2F;Elixir\u0026#x2F;PHP?",
        "num_comments": null,
        "story_id": 25305467,
        "story_title": "Stimulus.js 2.0",
        "story_url": "https://discourse.stimulusjs.org/t/announcing-stimulus-2-0/1482",
        "parent_id": 25312891,
        "created_at_i": 1607160371,
        "_tags": [
            "comment",
            "author_Existenceblinks",
            "story_25305467"
        ],
        "objectID": "25313068",
        "_highlightResult": {
            "author": {
                "value": "Existenceblinks",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "Why backend of web development is narrow down to \u003cem\u003enodejs\u003c/em\u003e server? How about people who use Rust/Python/Ruby/Elixir/PHP?",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Stimulus.js 2.0",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://discourse.stimulusjs.org/t/announcing-stimulus-2-0/1482",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-12-05T09:11:47.000Z",
        "title": null,
        "url": null,
        "author": "chrischen",
        "points": null,
        "story_text": null,
        "comment_text": "We’ve started adopting ReasonML on the server side (using nodejs as the end runtime). Anybody have ides on why ReScript\u0026#x2F;ReasonML on the server side isn’t more popular or targeted? Initially I considered F# and Fable but decided I wanted to adopt the same stack for the client side as well.",
        "num_comments": null,
        "story_id": 25305650,
        "story_title": "Fable 3: F# to JavaScript compiler",
        "story_url": "https://fable.io/blog/Announcing-Nagareyama-4.html",
        "parent_id": 25305650,
        "created_at_i": 1607159507,
        "_tags": [
            "comment",
            "author_chrischen",
            "story_25305650"
        ],
        "objectID": "25313002",
        "_highlightResult": {
            "author": {
                "value": "chrischen",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "We’ve started adopting ReasonML on the server side (using \u003cem\u003enodejs\u003c/em\u003e as the end runtime). Anybody have ides on why ReScript/ReasonML on the server side isn’t more popular or targeted? Initially I considered F# and Fable but decided I wanted to adopt the same stack for the client side as well.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Fable 3: F# to JavaScript compiler",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://fable.io/blog/Announcing-Nagareyama-4.html",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-12-05T07:42:26.000Z",
        "title": "FsKube: Free open source full-stack Kubernetes enabler",
        "url": null,
        "author": "rebataur",
        "points": 4,
        "story_text": "If you are a Java, Python, Ruby, or NodeJS developer,\nfsKube provides you with the best user experience in easily\nrunning your full-stack apps on Kubernetes in AWS with\njust few clicks.\u003cp\u003eGithub: https:\u0026#x2F;\u0026#x2F;github.com\u0026#x2F;rebataur\u0026#x2F;fskube\u003cp\u003eDownloads: https:\u0026#x2F;\u0026#x2F;www.rebataur.com\u0026#x2F;tools\u0026#x2F;fskube#fskube\u003cp\u003eDemo: https:\u0026#x2F;\u0026#x2F;youtu.be\u0026#x2F;Nt5yowdwm5Q",
        "comment_text": null,
        "num_comments": 0,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1607154146,
        "_tags": [
            "story",
            "author_rebataur",
            "story_25312667"
        ],
        "objectID": "25312667",
        "_highlightResult": {
            "title": {
                "value": "FsKube: Free open source full-stack Kubernetes enabler",
                "matchLevel": "none",
                "matchedWords": []
            },
            "author": {
                "value": "rebataur",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_text": {
                "value": "If you are a Java, Python, Ruby, or \u003cem\u003eNodeJS\u003c/em\u003e developer,\nfsKube provides you with the best user experience in easily\nrunning your full-stack apps on Kubernetes in AWS with\njust few clicks.\u003cp\u003eGithub: https://github.com/rebataur/fskube\u003cp\u003eDownloads: https://www.rebataur.com/tools/fskube#fskube\u003cp\u003eDemo: https://youtu.be/Nt5yowdwm5Q",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            }
        }
    }

]