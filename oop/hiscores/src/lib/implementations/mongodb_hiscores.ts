import { Implementation, type Hiscores } from "$lib/do_not_modify/hiscores";
import { JumpPlayer } from "$lib/do_not_modify/player";
import { DefaultRank } from "$lib/do_not_modify/rank";
import type { Leaderboard } from '$lib/do_not_modify/leaderboard'
import type {
  GetLeaderboardsRequest,
  GetLeaderboardsResponse,
  CreateLeaderboardRequest,
  CreateLeaderboardResponse,
  DeleteLeaderboardRequest,
  DeleteLeaderboardResponse,
  GetScoresRequest,
  GetScoresResponse,
  SubmitScoreRequest,
  SubmitScoreResponse,
  GetRanksForPlayerRequest,
  GetRanksForPlayerResponse,
} from "$lib/do_not_modify/requests";
import { JumpScore } from "$lib/do_not_modify/score";
import * as db from "$lib/mongo/db"

const client = await db.connect()
const database = client.db("hiscores")
const leaderboards = database.collection("leaderboards")

export class MongoDBHiscores implements Hiscores {
  implementation: Implementation = Implementation.MONGODB;

  async get_leaderboards(
    request: GetLeaderboardsRequest
  ): Promise<GetLeaderboardsResponse> {
    // TODO: implement logic

    console.log("GetLeaderboardsResponse");
    console.log(request);

    const response: GetLeaderboardsResponse = {
      success: false,
      leaderboards: [],
    };

    return response;
  }
  async create_leaderboard(
    request: CreateLeaderboardRequest
  ): Promise<CreateLeaderboardResponse> {
    // TODO: implement logic

    console.log("CreateLeaderboardRequest");
    console.log(request);

    const response: CreateLeaderboardResponse = {
      success: false,
    };
    return response;
  }
  async delete_leaderboard(
    request: DeleteLeaderboardRequest
  ): Promise<DeleteLeaderboardResponse> {
    // TODO: implement logic

    console.log("DeleteLeaderboardRequest");
    console.log(request);

    const response: DeleteLeaderboardResponse = {
      success: false,
    };
    return response;
  }
  async get_scores_from_leaderboard(
    request: GetScoresRequest
  ): Promise<GetScoresResponse> {
    // TODO: implement logic

    console.log("GetScoresRequest");
    console.log(request);

    const response: GetScoresResponse = {
      success: false,
      scores: [],
    };

    return response;
  }
  async submit_score_to_leaderboard(
    request: SubmitScoreRequest
  ): Promise<SubmitScoreResponse> {
    // TODO: implement logic

    console.log("SubmitScoreRequest");
    console.log(request);

    const leaderboardId = request.leaderboard_id

    if(!leaderboardId){
      const response: SubmitScoreResponse = {
        success: false,
        rank: new DefaultRank(0, "foo", new JumpScore(1337, new Date(), new JumpPlayer("bar", 9001)))
      }
    }

    const leaderboard = await leaderboards.findOne({leaderboardId})

    if(!leaderboard){
      return {success:false,rank:{index:-1000,leaderboard_id:request.leaderboard_id,score:request.score}}
    }

    if(leaderboard.)

    const response: SubmitScoreResponse = {
      success: false,
      rank: new DefaultRank(
        0,
        "foo",
        new JumpScore(1337, new Date(), new JumpPlayer("bar", 9001))
      ),
    };

    return response;
  }
  async get_all_ranks_for_player(
    request: GetRanksForPlayerRequest
  ): Promise<GetRanksForPlayerResponse> {
    // TODO: implement logic

    console.log("GetRanksForPlayerRequest");
    console.log(request);

    const response: GetRanksForPlayerResponse = {
      success: false,
      ranks: [],
    };

    return response;
  }
}
