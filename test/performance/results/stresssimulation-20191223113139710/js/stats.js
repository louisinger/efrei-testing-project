var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "9966",
        "ko": "34"
    },
    "minResponseTime": {
        "total": "481",
        "ok": "481",
        "ko": "10137"
    },
    "maxResponseTime": {
        "total": "11212",
        "ok": "9394",
        "ko": "11212"
    },
    "meanResponseTime": {
        "total": "1343",
        "ok": "1313",
        "ko": "10215"
    },
    "standardDeviation": {
        "total": "848",
        "ok": "672",
        "ko": "174"
    },
    "percentiles1": {
        "total": "1207",
        "ok": "1201",
        "ko": "10185"
    },
    "percentiles2": {
        "total": "1622",
        "ok": "1618",
        "ko": "10191"
    },
    "percentiles3": {
        "total": "2457",
        "ok": "2392",
        "ko": "10211"
    },
    "percentiles4": {
        "total": "3644",
        "ok": "3329",
        "ko": "10883"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3378,
    "percentage": 34
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1603,
    "percentage": 16
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4985,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 34,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.641",
        "ok": "23.56",
        "ko": "0.08"
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
        "total": "10000",
        "ok": "9966",
        "ko": "34"
    },
    "minResponseTime": {
        "total": "481",
        "ok": "481",
        "ko": "10137"
    },
    "maxResponseTime": {
        "total": "11212",
        "ok": "9394",
        "ko": "11212"
    },
    "meanResponseTime": {
        "total": "1343",
        "ok": "1313",
        "ko": "10215"
    },
    "standardDeviation": {
        "total": "848",
        "ok": "672",
        "ko": "174"
    },
    "percentiles1": {
        "total": "1207",
        "ok": "1201",
        "ko": "10185"
    },
    "percentiles2": {
        "total": "1622",
        "ok": "1618",
        "ko": "10191"
    },
    "percentiles3": {
        "total": "2457",
        "ok": "2392",
        "ko": "10211"
    },
    "percentiles4": {
        "total": "3644",
        "ok": "3329",
        "ko": "10883"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3378,
    "percentage": 34
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1603,
    "percentage": 16
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4985,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 34,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.641",
        "ok": "23.56",
        "ko": "0.08"
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
