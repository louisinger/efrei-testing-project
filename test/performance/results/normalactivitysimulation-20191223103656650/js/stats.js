var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "584",
        "ok": "584",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7962",
        "ok": "7962",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1644",
        "ok": "1644",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "939",
        "ok": "939",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1478",
        "ok": "1478",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2043",
        "ok": "2043",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3382",
        "ok": "3382",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4681",
        "ok": "4681",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 211,
    "percentage": 21
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 184,
    "percentage": 18
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 605,
    "percentage": 61
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.106",
        "ok": "3.106",
        "ko": "-"
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
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "584",
        "ok": "584",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7962",
        "ok": "7962",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1644",
        "ok": "1644",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "939",
        "ok": "939",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1478",
        "ok": "1478",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2043",
        "ok": "2043",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3382",
        "ok": "3382",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4681",
        "ok": "4681",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 211,
    "percentage": 21
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 184,
    "percentage": 18
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 605,
    "percentage": 61
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.106",
        "ok": "3.106",
        "ko": "-"
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
