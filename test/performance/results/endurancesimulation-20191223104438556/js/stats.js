var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "998",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "579",
        "ok": "579",
        "ko": "10322"
    },
    "maxResponseTime": {
        "total": "13808",
        "ok": "13808",
        "ko": "10783"
    },
    "meanResponseTime": {
        "total": "1942",
        "ok": "1924",
        "ko": "10553"
    },
    "standardDeviation": {
        "total": "1509",
        "ok": "1460",
        "ko": "231"
    },
    "percentiles1": {
        "total": "1552",
        "ok": "1550",
        "ko": "10553"
    },
    "percentiles2": {
        "total": "2276",
        "ok": "2270",
        "ko": "10668"
    },
    "percentiles3": {
        "total": "4488",
        "ok": "4458",
        "ko": "10760"
    },
    "percentiles4": {
        "total": "8296",
        "ok": "7918",
        "ko": "10778"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 141,
    "percentage": 14
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 212,
    "percentage": 21
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 645,
    "percentage": 65
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.608",
        "ok": "1.605",
        "ko": "0.003"
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
        "total": "1000",
        "ok": "998",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "579",
        "ok": "579",
        "ko": "10322"
    },
    "maxResponseTime": {
        "total": "13808",
        "ok": "13808",
        "ko": "10783"
    },
    "meanResponseTime": {
        "total": "1942",
        "ok": "1924",
        "ko": "10553"
    },
    "standardDeviation": {
        "total": "1509",
        "ok": "1460",
        "ko": "231"
    },
    "percentiles1": {
        "total": "1552",
        "ok": "1550",
        "ko": "10553"
    },
    "percentiles2": {
        "total": "2276",
        "ok": "2270",
        "ko": "10668"
    },
    "percentiles3": {
        "total": "4488",
        "ok": "4458",
        "ko": "10760"
    },
    "percentiles4": {
        "total": "8296",
        "ok": "7918",
        "ko": "10778"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 141,
    "percentage": 14
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 212,
    "percentage": 21
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 645,
    "percentage": 65
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.608",
        "ok": "1.605",
        "ko": "0.003"
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
