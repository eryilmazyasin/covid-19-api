import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <section className="nav">
      <ul>
        <li><Link to="/">homepage</Link></li>
        <li><Link to="/about">about me</Link></li>
      </ul>
    </section>
  );
}
