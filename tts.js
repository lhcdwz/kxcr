// Text-to-Speech-API

var tts;

function playMusic(id) {
    if (tts) {
        // 如果当前有正在朗读，则先停止
        tts.pause();
        tts = null;
    }

    // 动态合成音频
    tts = new Audio('./tts/' + id + '.wav');
    tts.preload = 'auto';
    tts.play();

    // 添加结束事件监听器，确保朗读结束后释放资源
    tts.addEventListener('ended', function() {
        tts = null;
    });
}