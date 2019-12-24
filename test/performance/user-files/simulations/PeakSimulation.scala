package testing.project

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class PeakSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("https://efrei-testing-project.herokuapp.com")

  val requestIndexScenario = scenario("BasicUserConnection")
    .exec(http("Request_index")
      .get("/")) 
    .pause(20)

  setUp(
    requestIndexScenario.inject(
      incrementUsersPerSec(1)
        .times(100)
        .eachLevelLasting(3)
        .separatedByRampsLasting(3)
        .startingFrom(0))
  ).protocols(httpProtocol)
}