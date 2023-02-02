WITH balances_sum AS (
    SELECT address, SUM(CASE denom 
    WHEN 'usdc' 
    THEN amount * 0.000001 
    WHEN 'swth' 
    THEN amount * 0.00000005 
    WHEN 'tmz' 
    THEN amount * 0.003 
    ELSE 0 
    END) AS usd_value

    FROM balances
    WHERE block_height > 730000
    GROUP BY address
),

trades_recent AS (
    SELECT address
    FROM trades
    WHERE block_height > 730000
    GROUP BY address
)
SELECT bs.address
FROM balances_sum bs
JOIN trades_recent tr ON bs.address = tr.address
WHERE bs.usd_value >= 500
