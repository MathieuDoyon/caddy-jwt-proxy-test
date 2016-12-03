# Start
```
docker-compose up
```

## Testing
open `http://localhost:2015/`

You should see 2 jwt keys, one for **admin** and one **assistant** role
#### Admin token
go to `http://localhost:2015/s1?token={adminToken}` = Allowed

go to `http://localhost:2015/s2?token={adminToken}` = Allowed

go to `http://localhost:2015/s3?token={adminToken}` = Allowed

#### Assistant token
go to `http://localhost:2015/s1?token={assistantToken}` = Allowed

go to `http://localhost:2015/s2?token={assistantToken}` = Denied

go to `http://localhost:2015/s3?token={assistantToken}` = Denied
