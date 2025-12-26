// Stream Info Sync
document.addEventListener('DOMContentLoaded', function() {
    setInterval(function() {
        var mainInfo = document.getElementById('cc_strinfo_summary_10502');
        var marqueeInfo = document.getElementById('cc_strinfo_marquee_10502');
        if (mainInfo && marqueeInfo && mainInfo.textContent !== 'Loading...') {
            marqueeInfo.textContent = mainInfo.textContent;
        }
    }, 1000);
});
