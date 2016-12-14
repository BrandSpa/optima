'use strict';
import request from 'axios';

export function storeActivity(data) {
    // data = {
    //   message: "cambio tipo a Alquiler",
    //   quotation_id:"37287"
    // };

    request
    .post('/api/v1/activities')
    .send(data)
    .end((err, res) => {
      console.log(res.body);
    });
}
