package testing.project

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class LoadALotServerSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("https://efrei-testing-project.herokuapp.com")

  val requestIndexScenario = scenario("BasicLoadServerSimulation")
    .exec(http("Request_index")
      .get("/")) 
    .pause(5)

  setUp(
    requestIndexScenario.inject(atOnceUsers(100)) 
  ).protocols(httpProtocol)
}