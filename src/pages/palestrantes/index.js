import React, { Component } from "react";
import Card from "./../../components/card";

export default class Palestrantes extends Component {
  render() {
    return (
      <div>
        <Card
          foto="https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2019/01/iStock-922757424-1080x675.jpg"
          nome="Raul Pereira da silva"
          palestra="ReactJS"
          desc="Componentização Componentização Componentização ComponentizaçãoComponentização Componentização"
        />
        <Card
          foto="https://wdef.com/wp-content/uploads/2018/11/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man-3.jpg"
          nome="Raul Pereira da silva"
          palestra="ReactJS"
          desc="Componentização"
        />
        <Card
          foto="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-j1kt8vldbi81uepo253j2hgs41-20180212150910.Medi.jpeg"
          nome="Raul Pereira da silva"
          palestra="ReactJS"
          desc="Componentização"
        />
      </div>
    );
  }
}
