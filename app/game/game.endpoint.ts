import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Game } from './../shared/game/game.interface';
import { Story } from './../shared/story/story.interface';
import { Vote } from './../shared/vote/vote.interface';

@Injectable()
export class GameUIEndpoint {

  requestOptions;

  private baseUrl: string = 'http://localhost:8080/api/games';

  constructor(private http: Http) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.requestOptions = new RequestOptions({ headers });
  }

  createGame(game: Game) {
    let url = `${this.baseUrl}`;
    return this.http.post(url, JSON.stringify({ game }), this.requestOptions)
      .map(this.extractData);
  }

  getGame(gameId: string) {
    let url = `${this.baseUrl}/${gameId}`;
    return this.http.get(url, this.requestOptions)
      .map(this.extractData);
  }

  addStoryToGame(gameId: string, story: Story) {
    let url = `${this.baseUrl}/${gameId}/stories`;
    return this.http.post(url, JSON.stringify({ story }), this.requestOptions)
      .map(this.extractData);
  }

  editStoryFromGame(gameId: string, story: Story) {
    let url = `${this.baseUrl}/${gameId}/stories/${story._id}`;
    return this.http.put(url, JSON.stringify({ story }), this.requestOptions)
      .map(this.extractData);
  }

  voteStoryFromGame(gameId: string, storyId: string, vote: Vote) {
    if (!vote._id) {
      let url = `${this.baseUrl}/${gameId}/stories/${storyId}/votes`;
      return this.http.post(url, JSON.stringify({ vote }), this.requestOptions)
        .map(this.extractData);
    }
    let url = `${this.baseUrl}/${gameId}/stories/${storyId}/votes/${vote._id}`;
    return this.http.put(url, JSON.stringify({ vote }), this.requestOptions)
      .map(this.extractData);
  }

  private extractData(response) {
    return response.json();
  }

}
