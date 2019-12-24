var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30099",
        "ok": "15676",
        "ko": "14423"
    },
    "minResponseTime": {
        "total": "518",
        "ok": "518",
        "ko": "1629"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "59149",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "8737",
        "ok": "2424",
        "ko": "15599"
    },
    "standardDeviation": {
        "total": "8106",
        "ok": "4687",
        "ko": "4779"
    },
    "percentiles1": {
        "total": "10118",
        "ok": "1056",
        "ko": "14952"
    },
    "percentiles2": {
        "total": "15234",
        "ok": "1754",
        "ko": "18113"
    },
    "percentiles3": {
        "total": "21547",
        "ok": "11236",
        "ko": "25138"
    },
    "percentiles4": {
        "total": "29338",
        "ok": "25146",
        "ko": "31063"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4558,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3992,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7126,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "count": 14423,
    "percentage": 48
},
    "meanNumberOfRequestsPerSecond": {
        "total": "46.023",
        "ok": "23.969",
        "ko": "22.054"
    }
},
contents: {
"req_request-index-0fe04": {
        type: "REQUEST",
        name: "Request_index",
path: "Request_index",
pathFormatted: "req_request-index-0fe04",
stats: {
    "name": "Request_index",
    "numberOfRequests": {
        "total": "30099",
        "ok": "15676",
        "ko": "14423"
    },
    "minResponseTime": {
        "total": "518",
        "ok": "518",
        "ko": "1629"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "59149",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "8737",
        "ok": "2424",
        "ko": "15599"
    },
    "standardDeviation": {
        "total": "8106",
        "ok": "4687",
        "ko": "4779"
    },
    "percentiles1": {
        "total": "10118",
        "ok": "1056",
        "ko": "14952"
    },
    "percentiles2": {
        "total": "15234",
        "ok": "1754",
        "ko": "18113"
    },
    "percentiles3": {
        "total": "21547",
        "ok": "11236",
        "ko": "25138"
    },
    "percentiles4": {
        "total": "29338",
        "ok": "25146",
        "ko": "31063"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4558,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3992,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7126,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "count": 14423,
    "percentage": 48
},
    "meanNumberOfRequestsPerSecond": {
        "total": "46.023",
        "ok": "23.969",
        "ko": "22.054"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
