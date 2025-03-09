//<div id="crop-year-display"></div>
<script>
// Ensure jQuery is loaded
jQuery(document).ready(function($) {
    function fetchCropYear() {
        $.ajax({
            url: 'https://cdn.mill95hops.com/current-crop-year/',
            method: 'GET',
            dataType: 'html',
            success: function(response) {
                var $html = $(response);
                var $renderContent = $html.find('#render').html();
                if ($renderContent) {
                    $('#crop-year-display').html($renderContent);
                } else {
                    $('#crop-year-display').html('Crop year data not available.');
                }
            },
            error: function(xhr, status, error) {
                var errorMsg = 'Error fetching crop year: ' + status + ' - ' + (xhr.status || 'No status') + ' ' + (xhr.statusText || 'No status text');
                $('#crop-year-display').html(errorMsg);
                console.error('Error details:', {
                    status: status,
                    xhrStatus: xhr.status,
                    xhrStatusText: xhr.statusText,
                    responseText: xhr.responseText,
                    error: error
                });
            }
        });
    }
    fetchCropYear();
});
</script>
