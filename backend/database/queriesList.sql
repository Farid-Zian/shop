
SELECT user.user_id FROM user
JOIN authentication ON user.user_id=authentication.user_id
WHERE user.email = ? AND authentication.password = ?;

