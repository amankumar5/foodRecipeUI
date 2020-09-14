import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchinfoService {

  constructor() { }

  async fetchRecipe()
  {
    try {
      const option = {
        method: "get",
        headers: { 'Content-Type': 'application/json'}
      }
      const url = `http://starlord.hackerearth.com/recipe`;
      const res = await fetch(url,option);
      const resText = await res.text();
  
      if (res.ok) {
        const res = JSON.parse(resText)
        console.log(res);
        return res;
      }
      else { 
        if(resText)
        throw new Error(`${resText}`);
        else
        throw new Error(`${res.status}`);
        
      }
    }
    catch (err) {
      throw err;
    };
  
    }
}


