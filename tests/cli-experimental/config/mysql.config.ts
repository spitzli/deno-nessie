import { ClientMySQL } from "../../../mod.ts";

export default {
  client: new ClientMySQL(
    {
      migrationFolder: "./tests/cli-experimental/mysql",
      seedFolder: "./tests/cli-experimental/mysql",
      experimental: true,
    },
    {
      "hostname": "0.0.0.0",
      "port": 5001,
      "username": "root",
      "db": "nessie",
    },
  ),
};
