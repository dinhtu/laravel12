<?php

namespace App\Exceptions\Domain;

use App\Enums\StatusCode;
use App\Exceptions\Http\HttpException;
use Exception;

/**
 * UMITO API実行の際にデータが存在しない場合
 */
class NotFoundResourceException extends HttpException
{
    /**
     * @var string $message 例外メッセージ
     */
    private const MESSAGE = 'Not found resource.';

    /**
     * @var int $statusCode HTTPステータスコード
     */
    private const STATUS_CODE = StatusCode::NOT_FOUND;

    /**
     * constructor.
     * @param int $statusCode HTTPステータスコード
     * @param string $message 例外メッセージ
     * @param $code int|null 例外コード
     * @param Exception|null $previous 例外
     */
    public function __construct(
        int $statusCode = self::STATUS_CODE,
        string $message = self::MESSAGE,
        $code = 0,
        Exception $previous = null
    ) {
        parent::__construct($statusCode, $message, $code, $previous);
    }
}
