package testing.project

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class StressSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("https://efrei-testing-project.herokuapp.com")

  val requestIndexScenario = scenario("BasicUserConnection")
    .exec(http("Request_index")
      .get("/")) 
    .pause(20)

  setUp(
    requestIndexScenario.inject(rampUsers(10000) during(400 seconds))
  ).protocols(httpProtocol)
}