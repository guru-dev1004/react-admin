import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";

export default ({ permission }) => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    {!permission && <CardContent>Lorem ipsum sic dolor amet...</CardContent>}
  </Card>
);
