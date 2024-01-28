{
  "Value": {
    "$type": "OFT.Platform.Settings.Charting.ChartSettings, OFT.Platform",
    "ScaleByLowerValue": false,
    "ChartTraderIsEnabled": false,
    "SelectedAccount": "",
    "UseLocalVolumes": false,
    "TIF": 0,
    "TemplateType": "snapshot",
    "IsContinious": false,
    "PanelsIsHidden": false,
    "DrawingObjectses": [],
    "EndDate": "2000-01-01T00:00:00",
    "Template": {
      "TemplateType": "template",
      "ScaleByLowerValue": false,
      "ChartScale": 30,
      "Panels": [
        {
          "IsNew": true,
          "SerializedIndicators": [
            "{\r\n  \"Type\": \"ATAS.Indicators.Technical.ClusterStatistic, ATAS.Indicators.Technical, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n  \"Settings\": \"{\\r\\n  \\\"ShowAsk\\\": false,\\r\\n  \\\"ShowBid\\\": false,\\r\\n  \\\"ShowDelta\\\": true,\\r\\n  \\\"ShowDeltaPerVolume\\\": false,\\r\\n  \\\"ShowSessionDelta\\\": false,\\r\\n  \\\"ShowSessionDeltaPerVolume\\\": false,\\r\\n  \\\"ShowMaximumDelta\\\": false,\\r\\n  \\\"ShowMinimumDelta\\\": false,\\r\\n  \\\"ShowDeltaChange\\\": false,\\r\\n  \\\"ShowVolume\\\": false,\\r\\n  \\\"ShowVolumePerSecond\\\": true,\\r\\n  \\\"ShowSessionVolume\\\": false,\\r\\n  \\\"ShowTicks\\\": false,\\r\\n  \\\"ShowHighLow\\\": false,\\r\\n  \\\"ShowTime\\\": false,\\r\\n  \\\"ShowDuration\\\": true,\\r\\n  \\\"BackGroundColor\\\": \\\"#78FFFFFF\\\",\\r\\n  \\\"GridColor\\\": \\\"#FFBFBFBF\\\",\\r\\n  \\\"VisibleProportion\\\": true,\\r\\n  \\\"VolumeColor\\\": \\\"#FF5B5EFC\\\",\\r\\n  \\\"AskColor\\\": \\\"#FF90EE90\\\",\\r\\n  \\\"BidColor\\\": \\\"#FFFF0000\\\",\\r\\n  \\\"TextColor\\\": \\\"#FF000000\\\",\\r\\n  \\\"Font\\\": {\\r\\n    \\\"Size\\\": 9,\\r\\n    \\\"FontFamily\\\": \\\"Arial\\\",\\r\\n    \\\"Bold\\\": true,\\r\\n    \\\"Italic\\\": false,\\r\\n    \\\"Underline\\\": false,\\r\\n    \\\"Strikeout\\\": false\\r\\n  },\\r\\n  \\\"CenterAlign\\\": false,\\r\\n  \\\"HeaderBackground\\\": \\\"#FFA5A5A5\\\",\\r\\n  \\\"HideRowsDescription\\\": false,\\r\\n  \\\"UseVolumeAlert\\\": false,\\r\\n  \\\"VolumeAlertValue\\\": 0.0,\\r\\n  \\\"VolumeAlertFile\\\": \\\"alert1\\\",\\r\\n  \\\"UseDeltaAlert\\\": false,\\r\\n  \\\"DeltaAlertValue\\\": 0.0,\\r\\n  \\\"DeltaAlertFile\\\": \\\"alert1\\\",\\r\\n  \\\"FullScreenMode\\\": false,\\r\\n  \\\"DenyToChangePanel\\\": true,\\r\\n  \\\"ShowDescription\\\": false,\\r\\n  \\\"Name\\\": \\\"Cluster Statistic\\\",\\r\\n  \\\"Panel\\\": \\\"1\\\",\\r\\n  \\\"IsVerticalIndicator\\\": false,\\r\\n  \\\"Visible\\\": true,\\r\\n  \\\"Locked\\\": false,\\r\\n  \\\"AllowedInteraction\\\": true\\r\\n}\",\r\n  \"SourceType\": \"bars\",\r\n  \"SourceSeriesId\": 0,\r\n  \"DataSeries\": [\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:G}\\\",\\r\\n  \\\"ShowOnlyNonZeroLabels\\\": false,\\r\\n  \\\"VisualType\\\": \\\"line\\\",\\r\\n  \\\"Color\\\": \\\"#FFFF0000\\\",\\r\\n  \\\"ValuesColor\\\": \\\"White\\\",\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"ClusterStatisticDefaultDataSeries\\\",\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Cluster Statistic\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    }\r\n  ],\r\n  \"LineSeries\": [],\r\n  \"ShowDescription\": false\r\n}"
          ],
          "Height": 60,
          "Collapsed": false
        },
        {
          "IsNew": true,
          "SerializedIndicators": [
            "{\r\n  \"Type\": \"ATAS.Indicators.Technical.KAMA, ATAS.Indicators.Technical, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n  \"Settings\": \"{\\r\\n  \\\"EfficiencyRatioPeriod\\\": 9,\\r\\n  \\\"ShortPeriod\\\": 2,\\r\\n  \\\"LongPeriod\\\": 30,\\r\\n  \\\"FullScreenMode\\\": false,\\r\\n  \\\"DenyToChangePanel\\\": true,\\r\\n  \\\"ShowDescription\\\": true,\\r\\n  \\\"Name\\\": \\\"Kaufman Adaptive Moving Average\\\",\\r\\n  \\\"Panel\\\": \\\"Chart\\\",\\r\\n  \\\"IsVerticalIndicator\\\": false,\\r\\n  \\\"Visible\\\": true,\\r\\n  \\\"Locked\\\": false,\\r\\n  \\\"AllowedInteraction\\\": true\\r\\n}\",\r\n  \"SourceType\": \"bars\",\r\n  \"SourceSeriesId\": 0,\r\n  \"DataSeries\": [\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowOnlyNonZeroLabels\\\": false,\\r\\n  \\\"VisualType\\\": \\\"line\\\",\\r\\n  \\\"Color\\\": \\\"#FF8B0000\\\",\\r\\n  \\\"ValuesColor\\\": \\\"White\\\",\\r\\n  \\\"Width\\\": 3,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"KAMADefaultDataSeries\\\",\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Kaufman Adaptive Moving Average\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    }\r\n  ],\r\n  \"LineSeries\": [],\r\n  \"ShowDescription\": true\r\n}"
          ],
          "Height": 60,
          "Collapsed": false
        },
        {
          "IsNew": true,
          "SerializedIndicators": [
            "{\r\n  \"Type\": \"ATAS.Indicators.Technical.VWAP, ATAS.Indicators.Technical, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n  \"Settings\": \"{\\r\\n  \\\"AllowCustomStartPoint\\\": false,\\r\\n  \\\"StartKeyFilter\\\": 49,\\r\\n  \\\"StartKey\\\": \\\"f\\\",\\r\\n  \\\"DeleteKeyFilter\\\": 50,\\r\\n  \\\"DeleteKey\\\": \\\"g\\\",\\r\\n  \\\"SavePointFilter\\\": {\\r\\n    \\\"EnabledVisible\\\": false,\\r\\n    \\\"Enabled\\\": false,\\r\\n    \\\"Value\\\": false\\r\\n  },\\r\\n  \\\"SavePoint\\\": false,\\r\\n  \\\"StartDate\\\": \\\"0001-01-01T00:00:00\\\",\\r\\n  \\\"ResetOnSessionFilter\\\": {\\r\\n    \\\"EnabledVisible\\\": false,\\r\\n    \\\"Enabled\\\": false,\\r\\n    \\\"Value\\\": false\\r\\n  },\\r\\n  \\\"ResetOnSession\\\": false,\\r\\n  \\\"ColoredDirection\\\": false,\\r\\n  \\\"BullishColor\\\": \\\"#FF2196F3\\\",\\r\\n  \\\"BearishColor\\\": \\\"#FFB22222\\\",\\r\\n  \\\"StartBar\\\": 0,\\r\\n  \\\"Type\\\": \\\"daily\\\",\\r\\n  \\\"TWAPMode\\\": \\\"vwap\\\",\\r\\n  \\\"VolumeMode\\\": \\\"total\\\",\\r\\n  \\\"Period\\\": 300,\\r\\n  \\\"StDev\\\": 1.0,\\r\\n  \\\"StDev1\\\": 2.0,\\r\\n  \\\"StDev2\\\": 3.0,\\r\\n  \\\"CustomSessionStart\\\": \\\"00:00:00\\\",\\r\\n  \\\"CustomSessionEnd\\\": \\\"23:59:59\\\",\\r\\n  \\\"Days\\\": 20,\\r\\n  \\\"ShowFirstPeriod\\\": false,\\r\\n  \\\"VWAPOnly\\\": true,\\r\\n  \\\"FullScreenMode\\\": false,\\r\\n  \\\"DenyToChangePanel\\\": false,\\r\\n  \\\"ShowDescription\\\": true,\\r\\n  \\\"Name\\\": \\\"VWAP/TWAP\\\",\\r\\n  \\\"Panel\\\": \\\"Chart\\\",\\r\\n  \\\"IsVerticalIndicator\\\": false,\\r\\n  \\\"Visible\\\": true,\\r\\n  \\\"Locked\\\": false,\\r\\n  \\\"AllowedInteraction\\\": true\\r\\n}\",\r\n  \"SourceType\": \"close\",\r\n  \"SourceSeriesId\": 0,\r\n  \"DataSeries\": [\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowOnlyNonZeroLabels\\\": false,\\r\\n  \\\"VisualType\\\": \\\"line\\\",\\r\\n  \\\"Color\\\": \\\"#FF396BA7\\\",\\r\\n  \\\"ValuesColor\\\": \\\"White\\\",\\r\\n  \\\"Width\\\": 3,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"VwapTwap\\\",\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"VWAP|TWAP\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowOnlyNonZeroLabels\\\": false,\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FF00BCD4\\\",\\r\\n  \\\"ValuesColor\\\": \\\"White\\\",\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"Lower2\\\",\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Lower Deviation 3\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowOnlyNonZeroLabels\\\": false,\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FF00BCD4\\\",\\r\\n  \\\"ValuesColor\\\": \\\"White\\\",\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"Upper2\\\",\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Upper Deviation 3\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowOnlyNonZeroLabels\\\": false,\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FF00BCD4\\\",\\r\\n  \\\"ValuesColor\\\": \\\"White\\\",\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"Lower1\\\",\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Lower Deviation 2\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowOnlyNonZeroLabels\\\": false,\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FF00BCD4\\\",\\r\\n  \\\"ValuesColor\\\": \\\"White\\\",\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"Upper1\\\",\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Upper Deviation 2\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowOnlyNonZeroLabels\\\": false,\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FF00BCD4\\\",\\r\\n  \\\"ValuesColor\\\": \\\"White\\\",\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"Lower\\\",\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Lower Deviation 1\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowOnlyNonZeroLabels\\\": false,\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FF00BCD4\\\",\\r\\n  \\\"ValuesColor\\\": \\\"White\\\",\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"Upper\\\",\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Upper Deviation 1\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowOnlyNonZeroLabels\\\": false,\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FF4CAF50\\\",\\r\\n  \\\"ValuesColor\\\": \\\"White\\\",\\r\\n  \\\"Width\\\": 5,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"PrevPosValueSeries\\\",\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Previous upper value\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowOnlyNonZeroLabels\\\": false,\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FFCD5C5C\\\",\\r\\n  \\\"ValuesColor\\\": \\\"White\\\",\\r\\n  \\\"Width\\\": 5,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"PrevNegValueSeries\\\",\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Previous lower value\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#99C30101\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": false,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"Upper2Background\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Upper fill 2\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#99C30101\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": false,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"Upper2BackgroundRes\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Upper Fill 2 res\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#99C30101\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": false,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"UpperBackground\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Upper fill\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#99C30101\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": false,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"UpperBackgroundRes\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Upper Fill res\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#99808080\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": false,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"MidUpBackground\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Middle fill up\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#99808080\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": false,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"MidUpBackgroundRes\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Middle Fill Up Res\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#99808080\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": false,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"MidDownBackground\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Middle fill down\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#99808080\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": false,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"MidDownBackgroundRes\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Middle Fill Down res\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#9900FF00\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": false,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"LowerBackground\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Lower fill\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#9900FF00\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": false,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"LowerBackgroundRes\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Lower Fill res\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#9900FF00\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": false,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"Lower2Background\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Lower fill 2\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#9900FF00\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": false,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"Lower2BackgroundRes\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Lower Fill 2 res\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    }\r\n  ],\r\n  \"LineSeries\": [],\r\n  \"ShowDescription\": true\r\n}"
          ],
          "Height": 60,
          "Collapsed": false
        },
        {
          "IsNew": true,
          "SerializedIndicators": [
            "{\r\n  \"Type\": \"ATAS.Indicators.Technical.EMA, ATAS.Indicators.Technical, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n  \"Settings\": \"{\\r\\n  \\\"Period\\\": 200,\\r\\n  \\\"ColoredDirection\\\": false,\\r\\n  \\\"BullishColor\\\": \\\"#FF4CAF50\\\",\\r\\n  \\\"BearishColor\\\": \\\"#FFFF5252\\\",\\r\\n  \\\"UseAlerts\\\": false,\\r\\n  \\\"RepeatAlert\\\": false,\\r\\n  \\\"AlertSensitivity\\\": 1,\\r\\n  \\\"AlertFile\\\": \\\"alert1\\\",\\r\\n  \\\"FontColor\\\": \\\"#FFFFFFFF\\\",\\r\\n  \\\"BackgroundColor\\\": \\\"#FF696969\\\",\\r\\n  \\\"FullScreenMode\\\": false,\\r\\n  \\\"DenyToChangePanel\\\": false,\\r\\n  \\\"ShowDescription\\\": true,\\r\\n  \\\"Name\\\": \\\"EMA\\\",\\r\\n  \\\"Panel\\\": \\\"Chart\\\",\\r\\n  \\\"IsVerticalIndicator\\\": false,\\r\\n  \\\"Visible\\\": true,\\r\\n  \\\"Locked\\\": false,\\r\\n  \\\"AllowedInteraction\\\": true\\r\\n}\",\r\n  \"SourceType\": \"close\",\r\n  \"SourceSeriesId\": 0,\r\n  \"DataSeries\": [\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowOnlyNonZeroLabels\\\": false,\\r\\n  \\\"VisualType\\\": \\\"line\\\",\\r\\n  \\\"Color\\\": \\\"#FF7F7F7F\\\",\\r\\n  \\\"ValuesColor\\\": \\\"White\\\",\\r\\n  \\\"Width\\\": 3,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"RenderSeries\\\",\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"EMA\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    }\r\n  ],\r\n  \"LineSeries\": [],\r\n  \"ShowDescription\": true\r\n}"
          ],
          "Height": 60,
          "Collapsed": false
        },
        {
          "IsNew": true,
          "SerializedIndicators": [
            "{\r\n  \"Type\": \"ATAS.Indicators.Technical.BollingerBands, ATAS.Indicators.Technical, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n  \"Settings\": \"{\\r\\n  \\\"Period\\\": 20,\\r\\n  \\\"Width\\\": 2.0,\\r\\n  \\\"Shift\\\": 0,\\r\\n  \\\"UseAlertsTop\\\": false,\\r\\n  \\\"RepeatAlertTop\\\": false,\\r\\n  \\\"AlertSensitivityTop\\\": 1,\\r\\n  \\\"AlertFileTop\\\": \\\"alert1\\\",\\r\\n  \\\"FontColorTop\\\": \\\"#FFFFFFFF\\\",\\r\\n  \\\"BackgroundColorTop\\\": \\\"#FF696969\\\",\\r\\n  \\\"UseAlertsMid\\\": false,\\r\\n  \\\"RepeatAlertMid\\\": false,\\r\\n  \\\"AlertSensitivityMid\\\": 1,\\r\\n  \\\"AlertFileMid\\\": \\\"alert1\\\",\\r\\n  \\\"FontColorMid\\\": \\\"#FFFFFFFF\\\",\\r\\n  \\\"BackgroundColorMid\\\": \\\"#FF696969\\\",\\r\\n  \\\"UseAlertsBot\\\": false,\\r\\n  \\\"RepeatAlertBot\\\": false,\\r\\n  \\\"AlertSensitivityBot\\\": 1,\\r\\n  \\\"AlertFileBot\\\": \\\"alert1\\\",\\r\\n  \\\"FontColorBot\\\": \\\"#FFFFFFFF\\\",\\r\\n  \\\"BackgroundColorBot\\\": \\\"#FF696969\\\",\\r\\n  \\\"FullScreenMode\\\": false,\\r\\n  \\\"DenyToChangePanel\\\": false,\\r\\n  \\\"ShowDescription\\\": true,\\r\\n  \\\"Name\\\": \\\"Bollinger Bands\\\",\\r\\n  \\\"Panel\\\": \\\"Chart\\\",\\r\\n  \\\"IsVerticalIndicator\\\": false,\\r\\n  \\\"Visible\\\": true,\\r\\n  \\\"Locked\\\": false,\\r\\n  \\\"AllowedInteraction\\\": true\\r\\n}\",\r\n  \"SourceType\": \"close\",\r\n  \"SourceSeriesId\": 0,\r\n  \"DataSeries\": [\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowOnlyNonZeroLabels\\\": false,\\r\\n  \\\"VisualType\\\": \\\"line\\\",\\r\\n  \\\"Color\\\": \\\"#00FFFFFF\\\",\\r\\n  \\\"ValuesColor\\\": \\\"White\\\",\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"SmaSeries\\\",\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Bollinger Bands\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"MidChannelSettingsDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowOnlyNonZeroLabels\\\": false,\\r\\n  \\\"VisualType\\\": \\\"line\\\",\\r\\n  \\\"Color\\\": \\\"#FF396BA7\\\",\\r\\n  \\\"ValuesColor\\\": \\\"White\\\",\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"dash\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": true,\\r\\n  \\\"Id\\\": \\\"UpSeries\\\",\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Up\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"TopChannelSettingsDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowOnlyNonZeroLabels\\\": false,\\r\\n  \\\"VisualType\\\": \\\"line\\\",\\r\\n  \\\"Color\\\": \\\"#FF4F81BD\\\",\\r\\n  \\\"ValuesColor\\\": \\\"White\\\",\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"dash\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": false,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": true,\\r\\n  \\\"Id\\\": \\\"DownSeries\\\",\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Down\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"BottomChannelSettingsDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#3E6495ED\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"Band\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Background Neutral\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"ChannelNeutralAreaSettingsDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#3E6495ED\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"ReserveBand\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Neutral Reserve\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#5A00FF00\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"UpBand\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Background Up\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"ChannelPositiveAreaSettingsDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#5A00FF00\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"UpReserveBand\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Up Reserve\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#5AFF0000\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"DownBand\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Background Down\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"ChannelNegativeAreaSettingsDescription\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.RangeDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"RangeColor\\\": \\\"#5AFF0000\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Visible\\\": false,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"DownReserveBand\\\",\\r\\n  \\\"Type\\\": \\\"band\\\",\\r\\n  \\\"Name\\\": \\\"Down Reserve\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    }\r\n  ],\r\n  \"LineSeries\": [],\r\n  \"ShowDescription\": true\r\n}"
          ],
          "Height": 60,
          "Collapsed": false
        },
        {
          "IsNew": true,
          "SerializedIndicators": [
            "{\r\n  \"Type\": \"ATAS.Indicators.Technical.BigTrades, ATAS.Indicators.Other, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n  \"Settings\": \"{\\r\\n  \\\"CalculationMode\\\": \\\"cumulativeTrades\\\",\\r\\n  \\\"PriceLoc\\\": \\\"any\\\",\\r\\n  \\\"AutoFilter\\\": true,\\r\\n  \\\"MinVol\\\": 221.0,\\r\\n  \\\"MaxVol\\\": 0.0,\\r\\n  \\\"UseTimeFilter\\\": false,\\r\\n  \\\"TimeFrom\\\": \\\"00:00:00\\\",\\r\\n  \\\"TimeTo\\\": \\\"00:00:00\\\",\\r\\n  \\\"Buycolor\\\": \\\"#FF9FA2DE\\\",\\r\\n  \\\"Sellcolor\\\": \\\"#FFEB8284\\\",\\r\\n  \\\"BetweenColor\\\": \\\"#FF403D3D\\\",\\r\\n  \\\"AbovePrice\\\": true,\\r\\n  \\\"VisualType\\\": \\\"rectangle\\\",\\r\\n  \\\"VisualObjectsTransparency\\\": 70,\\r\\n  \\\"Transparency\\\": 20,\\r\\n  \\\"FixedSizes\\\": false,\\r\\n  \\\"Size\\\": 10,\\r\\n  \\\"MinSize\\\": 5,\\r\\n  \\\"MaxSize\\\": 50,\\r\\n  \\\"UseAlerts\\\": false,\\r\\n  \\\"AlertFile\\\": \\\"alert2\\\",\\r\\n  \\\"AlertBgColor\\\": \\\"#FF000000\\\",\\r\\n  \\\"FullScreenMode\\\": false,\\r\\n  \\\"DenyToChangePanel\\\": true,\\r\\n  \\\"ShowDescription\\\": true,\\r\\n  \\\"Name\\\": \\\"Big trades\\\",\\r\\n  \\\"Panel\\\": \\\"Chart\\\",\\r\\n  \\\"IsVerticalIndicator\\\": false,\\r\\n  \\\"Visible\\\": true,\\r\\n  \\\"Locked\\\": false,\\r\\n  \\\"AllowedInteraction\\\": true\\r\\n}\",\r\n  \"SourceType\": \"bars\",\r\n  \"SourceSeriesId\": 0,\r\n  \"DataSeries\": [\r\n    {\r\n      \"Type\": \"ATAS.Indicators.PriceSelectionDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Visible\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"PriceSelectionSeries\\\",\\r\\n  \\\"Type\\\": \\\"priceSelection\\\",\\r\\n  \\\"Name\\\": \\\"Price selections\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    }\r\n  ],\r\n  \"LineSeries\": [],\r\n  \"ShowDescription\": true\r\n}"
          ],
          "Height": 60,
          "Collapsed": false
        },
        {
          "IsNew": true,
          "SerializedIndicators": [
            "{\r\n  \"Type\": \"ATAS.Indicators.Technical.FairValueGap, ATAS.Indicators.Technical, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n  \"Settings\": \"{\\r\\n  \\\"HigherTimeframe\\\": \\\"daily\\\",\\r\\n  \\\"MidpointTouch\\\": false,\\r\\n  \\\"HideOlds\\\": true,\\r\\n  \\\"Transparency\\\": 1,\\r\\n  \\\"ShowCurrentTF\\\": true,\\r\\n  \\\"BullishColorCurrentTF\\\": \\\"73, 0, 127, 0\\\",\\r\\n  \\\"BearishColorCurrentTF\\\": \\\"132, 140, 0, 0\\\",\\r\\n  \\\"ShowHigherTF\\\": false,\\r\\n  \\\"BullishColorHigherTF\\\": \\\"128, 128, 0\\\",\\r\\n  \\\"BearishColorHigherTF\\\": \\\"156, 39, 176\\\",\\r\\n  \\\"MidPointWidth\\\": 1,\\r\\n  \\\"MidPointColor\\\": \\\"120, 123, 134\\\",\\r\\n  \\\"ShowLabel\\\": false,\\r\\n  \\\"LabelSize\\\": 10,\\r\\n  \\\"LabelColor\\\": \\\"120, 123, 134\\\",\\r\\n  \\\"LabelOffsetX\\\": 0,\\r\\n  \\\"LabelOffsetY\\\": 10,\\r\\n  \\\"FullScreenMode\\\": false,\\r\\n  \\\"DenyToChangePanel\\\": true,\\r\\n  \\\"ShowDescription\\\": true,\\r\\n  \\\"Name\\\": \\\"Fair Value Gap\\\",\\r\\n  \\\"Panel\\\": \\\"Chart\\\",\\r\\n  \\\"IsVerticalIndicator\\\": false,\\r\\n  \\\"Visible\\\": true,\\r\\n  \\\"Locked\\\": false,\\r\\n  \\\"AllowedInteraction\\\": true\\r\\n}\",\r\n  \"SourceType\": \"bars\",\r\n  \"SourceSeriesId\": 0,\r\n  \"DataSeries\": [\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowOnlyNonZeroLabels\\\": false,\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FFFF5252\\\",\\r\\n  \\\"ValuesColor\\\": \\\"White\\\",\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"FairValueGapDefaultDataSeries\\\",\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Fair Value Gap\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    }\r\n  ],\r\n  \"LineSeries\": [],\r\n  \"ShowDescription\": true\r\n}"
          ],
          "Height": 60,
          "Collapsed": false
        },
        {
          "IsNew": true,
          "SerializedIndicators": [
            "{\r\n  \"Type\": \"ATAS.Indicators.Technical.AdaptiveBigTrades, ATAS.Indicators.Other, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n  \"Settings\": \"{\\r\\n  \\\"Size\\\": 40,\\r\\n  \\\"Buys\\\": \\\"#78228B22\\\",\\r\\n  \\\"Sells\\\": \\\"#78DC143C\\\",\\r\\n  \\\"FullScreenMode\\\": false,\\r\\n  \\\"DenyToChangePanel\\\": true,\\r\\n  \\\"ShowDescription\\\": true,\\r\\n  \\\"Name\\\": \\\"Adaptive big trades\\\",\\r\\n  \\\"Panel\\\": \\\"Chart\\\",\\r\\n  \\\"IsVerticalIndicator\\\": false,\\r\\n  \\\"Visible\\\": true,\\r\\n  \\\"Locked\\\": false,\\r\\n  \\\"AllowedInteraction\\\": true\\r\\n}\",\r\n  \"SourceType\": \"bars\",\r\n  \"SourceSeriesId\": 0,\r\n  \"DataSeries\": [\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowOnlyNonZeroLabels\\\": false,\\r\\n  \\\"VisualType\\\": \\\"line\\\",\\r\\n  \\\"Color\\\": \\\"#FFFF5252\\\",\\r\\n  \\\"ValuesColor\\\": \\\"White\\\",\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"DrawAbovePrice\\\": true,\\r\\n  \\\"IgnoredByAlerts\\\": false,\\r\\n  \\\"Id\\\": \\\"AdaptiveBigTradesDefaultDataSeries\\\",\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Adaptive big trades\\\",\\r\\n  \\\"DescriptionKey\\\": \\\"VisualizationDescription\\\"\\r\\n}\"\r\n    }\r\n  ],\r\n  \"LineSeries\": [],\r\n  \"ShowDescription\": true\r\n}"
          ],
          "Height": 60,
          "Collapsed": false
        }
      ],
      "Indicators": [],
      "clusterSettings": {
        "Caption": "Cluster Settings",
        "Volumes": "#FF6495ED",
        "Bid": "#FF8B0000",
        "Ask": "#FF008000",
        "ClusterBorderWidth": 1,
        "Foreground": "#6CFFFFFF",
        "AutoSize": false,
        "FontSize": 8.0,
        "CutLongText": true,
        "MinimumClusterWidthToShowText": 19,
        "ValueAreaColor": "#64C8D8FF",
        "ShowValueArea": false,
        "ImbalanceBid": "#FFFFFF00",
        "ImbalanceAsk": "#FF00FF00",
        "MinimumImbalanceDifference": 1,
        "IgnoreZeroValues": false,
        "ImbalanceVolumeFilter": 1,
        "ImbalanceRate": 300,
        "ShowDirectionMarker": true,
        "DirectionMakerWidth": 4,
        "ClusterBorderPen": {
          "Color": "#00FFFFFF",
          "LineDashStyle": "solid",
          "Width": 1
        },
        "BorderColorByDirection": false,
        "SecondClusters": {
          "Caption": "",
          "Enabled": false,
          "ClustersContentModeFilter": {
            "EnumType": "OFT.Controls.Chart.enums.ClustersContentModes, OFT.Controls, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7",
            "Value": "volume",
            "Enabled": false,
            "EnabledVisible": false
          },
          "ClustersContentMode": "volume",
          "ClustersModeFilter": {
            "EnumType": "OFT.Controls.Chart.enums.ClustersVisualModes, OFT.Controls, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7",
            "Value": "fullRow",
            "Enabled": false,
            "EnabledVisible": false
          },
          "ClustersMode": "fullRow",
          "UseBorderOfEachPriceLevelFilter": {
            "EnabledVisible": false,
            "Enabled": false,
            "Value": false
          },
          "UseBorderOfEachPriceLevel": false,
          "ColorSchemeFilter": {
            "EnumType": "OFT.Controls.Chart.enums.ClustersColorSchemes, OFT.Controls, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7",
            "Value": "volumeProportion",
            "Enabled": false,
            "EnabledVisible": false
          },
          "ColorScheme": "volumeProportion",
          "ClusterBGFilter": {
            "EnabledVisible": false,
            "Enabled": false,
            "Value": "#00FFFFFF"
          },
          "ClusterBG": "#00FFFFFF",
          "VolumeColor": {
            "EnabledVisible": false,
            "Enabled": false,
            "Value": "#FF2962FF"
          },
          "BidColor": {
            "EnabledVisible": false,
            "Enabled": false,
            "Value": "#FFF71427"
          },
          "AskColor": {
            "EnabledVisible": false,
            "Enabled": false,
            "Value": "#FF2962FF"
          },
          "HeatmapType": {
            "EnabledVisible": false,
            "Enabled": false,
            "Value": 0
          },
          "UpperCutOff": {
            "EnabledVisible": false,
            "Enabled": false,
            "Value": 20
          },
          "Contrast": {
            "EnabledVisible": false,
            "Enabled": false,
            "Value": 0
          },
          "MaxVolTypeFilter": {
            "EnumType": "Advanced_Time_And_Sales.ClusterSettings+MaxVolSelectionType, OFT.Controls, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7",
            "Value": "volume",
            "Enabled": false,
            "EnabledVisible": false
          },
          "MaxVolType": "volume",
          "MaxVolColorFilter": {
            "EnabledVisible": false,
            "Enabled": false,
            "Value": "#00000000"
          },
          "MaxVolColor": "#00000000",
          "MaxVolSelectionWidthFilter": {
            "EnabledVisible": false,
            "Enabled": false,
            "Value": 1
          },
          "MaxVolSelectionWidth": 1,
          "MaxVolTextColorFilter": {
            "EnabledVisible": false,
            "Enabled": false,
            "Value": "#FFD1D4DC"
          },
          "MaxVolTextColor": "#FFD1D4DC",
          "MaxLevelBoldFilter": {
            "EnabledVisible": false,
            "Enabled": false,
            "Value": true
          },
          "MaxLevelBold": true
        },
        "BorderType": "candle",
        "BorderColorByDirectionFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": false
        },
        "ClusterBorderPenFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": {
            "Color": "#00FFFFFF",
            "LineDashStyle": 0,
            "Width": 1
          }
        },
        "ShowDirectionMarkerFilter": {
          "EnabledVisible": true,
          "Enabled": true,
          "Value": 4
        },
        "Showtext": true,
        "ForegroundFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": "#6CFFFFFF"
        },
        "AutoSizeFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": false
        },
        "FontSizeFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": 8.0
        },
        "Divider": 1.0,
        "CutLongTextFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": true
        },
        "MinimumClusterWidthToShowTextFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": 19
        },
        "ValueAreaColorFilter": {
          "EnabledVisible": true,
          "Enabled": false,
          "Value": "#64C8D8FF"
        },
        "ProportionalMode": "bar",
        "ProportionByAllBars": false,
        "GradientRate": 70,
        "CustomProportionValue": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": 0.0
        },
        "CustomproportionVolume": 0.0,
        "UpperCutOffGradient": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": 30
        },
        "EnableBidAskImbalance": true,
        "ImbalanceBidFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": "#FFFFFF00"
        },
        "ImbalanceAskFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": "#FF00FF00"
        },
        "ImbalanceRateFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": 300
        },
        "ImbalanceVolumeFilterInt": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": 1
        },
        "MinimumImbalanceDifferenceFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": 1
        },
        "IgnoreZeroValuesFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": false
        },
        "BoldFontForImbalances": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": true
        },
        "CustomRowHeight": {
          "EnabledVisible": true,
          "Enabled": false,
          "Value": 10
        },
        "Filters": [],
        "ClustersContentModeFilter": {
          "EnumType": "OFT.Controls.Chart.enums.ClustersContentModes, OFT.Controls, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7",
          "Value": "bidAskCentered",
          "Enabled": true,
          "EnabledVisible": false
        },
        "ClustersContentMode": "bidAskCentered",
        "ClustersModeFilter": {
          "EnumType": "OFT.Controls.Chart.enums.ClustersVisualModes, OFT.Controls, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7",
          "Value": "deltaHistogram",
          "Enabled": true,
          "EnabledVisible": false
        },
        "ClustersMode": "deltaHistogram",
        "UseBorderOfEachPriceLevelFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": false
        },
        "UseBorderOfEachPriceLevel": false,
        "ColorSchemeFilter": {
          "EnumType": "OFT.Controls.Chart.enums.ClustersColorSchemes, OFT.Controls, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7",
          "Value": "delta",
          "Enabled": true,
          "EnabledVisible": false
        },
        "ColorScheme": "delta",
        "ClusterBGFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": "#00FFFFFF"
        },
        "ClusterBG": "#00FFFFFF",
        "VolumeColor": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": "#FF6495ED"
        },
        "BidColor": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": "#FF8B0000"
        },
        "AskColor": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": "#FF008000"
        },
        "HeatmapType": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": 5
        },
        "UpperCutOff": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": 0
        },
        "Contrast": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": 46
        },
        "MaxVolTypeFilter": {
          "EnumType": "Advanced_Time_And_Sales.ClusterSettings+MaxVolSelectionType, OFT.Controls, Version=6.1.1.309, Culture=neutral, PublicKeyToken=330427d8594115c7",
          "Value": "volume",
          "Enabled": true,
          "EnabledVisible": false
        },
        "MaxVolType": "volume",
        "MaxVolColorFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": "#FFFFFF00"
        },
        "MaxVolColor": "#FFFFFF00",
        "MaxVolSelectionWidthFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": 1
        },
        "MaxVolSelectionWidth": 1,
        "MaxVolTextColorFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": "#00FFFFFF"
        },
        "MaxVolTextColor": "#00FFFFFF",
        "MaxLevelBoldFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": false
        },
        "MaxLevelBold": false
      },
      "colorsettings": {
        "BuyCandlePricePen": {
          "Color": "159, 162, 222",
          "DashStyle": "solid",
          "Width": 1.0
        },
        "SellCandlePricePen": {
          "Color": "235, 130, 132",
          "DashStyle": "solid",
          "Width": 1.0
        },
        "BuyBarPricePen": {
          "Color": "159, 162, 222",
          "DashStyle": "solid",
          "Width": 1.0
        },
        "SellBarPricePen": {
          "Color": "235, 130, 132",
          "DashStyle": "solid",
          "Width": 1.0
        },
        "DojiBarPricePen": {
          "Color": "255, 255, 255",
          "DashStyle": "solid",
          "Width": 1.0
        },
        "LineChartPricePen": {
          "Color": "109, 108, 108",
          "DashStyle": "solid",
          "Width": 1.0
        },
        "MountainChartPricePen": {
          "Color": "71, 107, 150",
          "DashStyle": "solid",
          "Width": 1.0
        },
        "SolidCurrentPricePen": {
          "Color": "255, 255, 255",
          "DashStyle": "solid",
          "Width": 1.0
        },
        "Caption": "Chart Color Settings",
        "BackgroundBrushSettings": {
          "StartColor": "#FF000000",
          "EndColor": "#FF000000",
          "UseEndColor": false
        },
        "BackGround": "#FF000000",
        "StateColor": "#FFCFA246",
        "TextHistogramColor": "#FF7F7F7F",
        "IndicatorsSeparator": {
          "Color": "#FF434651",
          "LineDashStyle": "solid",
          "Width": 1
        },
        "CurrentPriceColor": {
          "EnabledVisible": true,
          "Enabled": true,
          "Value": "#FFFFFFFF"
        },
        "PriceLinePen": {
          "Color": "#3FFFFFFF",
          "LineDashStyle": "solid",
          "Width": 1
        },
        "PriceLineDashStyle": "solid",
        "PriceLineWidth": 1,
        "ExtendPriceLine": false,
        "CrosshairPen": {
          "Color": "#AF808080",
          "LineDashStyle": "solid",
          "Width": 1
        },
        "AVersion": 1,
        "AxisCurrentBackColor": "#FF000000",
        "AxisCurrentForeColor": "#FFFFFFE0",
        "GridPen": {
          "Color": "#FFEFE3E5",
          "LineDashStyle": "solid",
          "Width": 1
        },
        "ShowVHorizontalGrid": false,
        "CustomGridStep": 1,
        "ShowVericalGrid": false,
        "CustomVertGridStep": 0,
        "NewSessionPen": {
          "Color": "#FF808080",
          "LineDashStyle": "solid",
          "Width": 1
        },
        "AxisColorFilter": {
          "EnabledVisible": true,
          "Enabled": false,
          "Value": "#FFFFFFFF"
        },
        "AxisColor": "#FFFFFFFF",
        "AxisTextColor": "#B9000000",
        "FontSizeDecimal": 9.0,
        "TimeFormat": "auto",
        "HidePriceAxis": false,
        "DrawAxisBorders": true,
        "BuyColor": "#FF9FA2DE",
        "SellColor": "#FFEB8284",
        "DrawCandleBorder": false,
        "CandleBorderColorAsBody": true,
        "CellBorderColor": "#FF403D3D",
        "CandleBorderWidth": 1,
        "BarsWidth": 1,
        "DojiBarColor": "#FFFFFFFF",
        "DownBarColor": "#FFEB8284",
        "UpBarColor": "#FF9FA2DE",
        "ShowOpenOfBar": true,
        "ShowCloseOfBar": true,
        "ChartLinePen": {
          "Color": "#FF6D6C6C",
          "LineDashStyle": "solid",
          "Width": 2
        },
        "MountainLinePen": {
          "Color": "#FF476B96",
          "LineDashStyle": "solid",
          "Width": 2
        },
        "MountainBrushSettings": {
          "StartColor": "#00FFFFFF",
          "EndColor": "#649ACCFF",
          "UseEndColor": false
        },
        "UseSessionTime": false,
        "SessionStartFilter": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": "00:00:00"
        },
        "SessionStart": "00:00:00",
        "SessionEndFilter": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": "23:59:59"
        },
        "SessionEnd": "23:59:59",
        "PriceBorder": false,
        "ShowIndicatorsValuesOnMouseOver": true,
        "AutoTransFormCandles": true,
        "CandleSizeTotransformToClusters": 20,
        "HideClustersPanel": true,
        "AutoTransformHorizontalLines": false,
        "AutoTransformVerticalLines": false,
        "PriceOffset": 0,
        "ChartOffset": 30,
        "UseSmoothing": false,
        "MouseWheelBehavior": "zoom",
        "MinimizeValues": true,
        "DigitsAfterComma": 0,
        "KeepSelectedObjects": false,
        "ObjectsSelectionDrawingColor": "30, 83, 228",
        "ObjectsSelectionColor": "#FF1E53E4",
        "Sensitivity": 0,
        "UseCustomUpdateIntervals": false,
        "CustomFPS": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": {
            "Start": 10,
            "End": 50
          }
        },
        "IndicatorsListIsCollapsed": true,
        "VolumeValuesFormat": "{0:0.}",
        "RedrawInterval": 100,
        "NewSessionLineColor": "#FF808080",
        "Сl_crosshair": "#AF808080",
        "GridColor": "#FFEFE3E5",
        "HistogramLinesColor": "#C8ADD8E6",
        "HistogramColor": "#FF808080",
        "ShowCumulativeValues": true,
        "BidColor": "#FFE84548",
        "AskColor": "#FF49D149",
        "ValueAreaColor": "#FFC8D8FF",
        "PocColor": "#FFC8D8FF",
        "HistogramTextColor": "#FF35212E",
        "ExtendPoc": false,
        "ExtendValueArea": false
      },
      "histogramInterval": "contract",
      "typeHistogram": "bidAsk",
      "ShowHistogram": false,
      "ShowingDigital": false,
      "UseOpacility": false,
      "ShowTxtMouse": true,
      "VisibleCrossHair": true,
      "ShowValueArea": true,
      "ShowPoc": false,
      "AlwaysOnTop": false,
      "BarsType": "clusters",
      "ClusterWidth": 47.285503569656586434136517911,
      "TypeCluster": "volume",
      "RowHeight": 11.095686172533828,
      "ChangeHeightmanualy": true,
      "PaintingMode": "drawCrossHair",
      "TradingSettings": {
        "PnLMode": "money",
        "Caption": "",
        "ShowText": true,
        "OneClickMode": false,
        "TradingMode": "autoDetection",
        "StopMode": "stop",
        "Slippage": 5,
        "ShowTrades": "visible",
        "Size": 6,
        "TradesColor": "#FF000080",
        "TradesSellColor": "#FFFF0000",
        "ShowOrders": "visible",
        "OrdersOffset": 115,
        "BuyOrdersColors": "#FF87CEEB",
        "SellOrdersColor": "#FFFFA0A2",
        "LimitColors": "#FF87CEEB",
        "StopColor": "#FFFFA0A2",
        "OrderstextColor": "#FF000000",
        "ShowPosition": "visible",
        "PositionOffset": 115,
        "PositionTextColors": "#FFFFFFFF",
        "PositionBackGround": "#FF000000",
        "PositionPositive": "#FF008000",
        "PositionNegative": "#FFFF0000"
      },
      "ClusterVisualizationType": "bidAskLadder",
      "Version": 1,
      "UseAutoScale": false,
      "LayoutString": "<XtraSerializer version=\"1.0\" application=\"\">\r\n  <property name=\"#LayoutVersion\">1.3</property>\r\n  <property name=\"$BarManager\" iskey=\"true\" value=\"BarManager\">\r\n    <property name=\"RuntimeCustomizations\" iskey=\"true\" value=\"8\">\r\n      <property name=\"Item1\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"PropertyName\">Visible</property>\r\n        <property name=\"NewValue\" type=\"System.Boolean\">false</property>\r\n        <property name=\"OldValue\" type=\"System.Boolean\">true</property>\r\n        <property name=\"ActOnHost\">false</property>\r\n        <property name=\"TargetName\">ToolBar</property>\r\n        <property name=\"Overwrite\">true</property>\r\n        <property name=\"Timestamp\">44739812</property>\r\n        <property name=\"CustomizationType\">DevExpress.Xpf.Bars.RuntimePropertyCustomization</property>\r\n        <property name=\"AffectedTargets\" iskey=\"true\" value=\"0\" />\r\n      </property>\r\n      <property name=\"Item2\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"PropertyName\">DockInfo.ContainerName</property>\r\n        <property name=\"NewValue\" type=\"System.String\" />\r\n        <property name=\"OldValue\" isnull=\"true\" />\r\n        <property name=\"ActOnHost\">false</property>\r\n        <property name=\"TargetName\">ToolBar</property>\r\n        <property name=\"Overwrite\">true</property>\r\n        <property name=\"Timestamp\">44740671</property>\r\n        <property name=\"CustomizationType\">DevExpress.Xpf.Bars.RuntimePropertyCustomization</property>\r\n        <property name=\"AffectedTargets\" iskey=\"true\" value=\"0\" />\r\n      </property>\r\n      <property name=\"Item3\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"PropertyName\">DockInfo.ContainerName</property>\r\n        <property name=\"NewValue\" type=\"System.String\" />\r\n        <property name=\"OldValue\" isnull=\"true\" />\r\n        <property name=\"ActOnHost\">false</property>\r\n        <property name=\"TargetName\">DrawingObjectsToolbar</property>\r\n        <property name=\"Overwrite\">true</property>\r\n        <property name=\"Timestamp\">44740671</property>\r\n        <property name=\"CustomizationType\">DevExpress.Xpf.Bars.RuntimePropertyCustomization</property>\r\n        <property name=\"AffectedTargets\" iskey=\"true\" value=\"0\" />\r\n      </property>\r\n      <property name=\"Item4\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"PropertyName\">DockInfo.ContainerName</property>\r\n        <property name=\"NewValue\" type=\"System.String\" />\r\n        <property name=\"OldValue\" isnull=\"true\" />\r\n        <property name=\"ActOnHost\">false</property>\r\n        <property name=\"TargetName\">ClusterBar</property>\r\n        <property name=\"Overwrite\">true</property>\r\n        <property name=\"Timestamp\">44740687</property>\r\n        <property name=\"CustomizationType\">DevExpress.Xpf.Bars.RuntimePropertyCustomization</property>\r\n        <property name=\"AffectedTargets\" iskey=\"true\" value=\"0\" />\r\n      </property>\r\n      <property name=\"Item5\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"PropertyName\">DockInfo.ContainerName</property>\r\n        <property name=\"NewValue\" type=\"System.String\" />\r\n        <property name=\"OldValue\" type=\"System.String\" />\r\n        <property name=\"ActOnHost\">false</property>\r\n        <property name=\"TargetName\">ToolBar</property>\r\n        <property name=\"Overwrite\">true</property>\r\n        <property name=\"Timestamp\">13535453</property>\r\n        <property name=\"CustomizationType\">DevExpress.Xpf.Bars.RuntimePropertyCustomization</property>\r\n        <property name=\"AffectedTargets\" iskey=\"true\" value=\"0\" />\r\n      </property>\r\n      <property name=\"Item6\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"PropertyName\">DockInfo.ContainerName</property>\r\n        <property name=\"NewValue\" type=\"System.String\" />\r\n        <property name=\"OldValue\" type=\"System.String\" />\r\n        <property name=\"ActOnHost\">false</property>\r\n        <property name=\"TargetName\">DrawingObjectsToolbar</property>\r\n        <property name=\"Overwrite\">true</property>\r\n        <property name=\"Timestamp\">13535468</property>\r\n        <property name=\"CustomizationType\">DevExpress.Xpf.Bars.RuntimePropertyCustomization</property>\r\n        <property name=\"AffectedTargets\" iskey=\"true\" value=\"0\" />\r\n      </property>\r\n      <property name=\"Item7\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"PropertyName\">DockInfo.ContainerName</property>\r\n        <property name=\"NewValue\" type=\"System.String\" />\r\n        <property name=\"OldValue\" type=\"System.String\" />\r\n        <property name=\"ActOnHost\">false</property>\r\n        <property name=\"TargetName\">ClusterBar</property>\r\n        <property name=\"Overwrite\">true</property>\r\n        <property name=\"Timestamp\">13535484</property>\r\n        <property name=\"CustomizationType\">DevExpress.Xpf.Bars.RuntimePropertyCustomization</property>\r\n        <property name=\"AffectedTargets\" iskey=\"true\" value=\"0\" />\r\n      </property>\r\n      <property name=\"Item8\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"PropertyName\">Visible</property>\r\n        <property name=\"NewValue\" type=\"System.Boolean\">false</property>\r\n        <property name=\"OldValue\" type=\"System.Boolean\">true</property>\r\n        <property name=\"ActOnHost\">false</property>\r\n        <property name=\"TargetName\">ClusterBar</property>\r\n        <property name=\"Overwrite\">true</property>\r\n        <property name=\"Timestamp\">13539750</property>\r\n        <property name=\"CustomizationType\">DevExpress.Xpf.Bars.RuntimePropertyCustomization</property>\r\n        <property name=\"AffectedTargets\" iskey=\"true\" value=\"0\" />\r\n      </property>\r\n    </property>\r\n  </property>\r\n  <property name=\"$BarManager$ChartLayoutControl\" iskey=\"true\" value=\"BarManager$ChartLayoutControl\">\r\n    <property name=\"CollapsableContentWidth\">194</property>\r\n  </property>\r\n</XtraSerializer>"
    },
    "TimeFrame": {
      "Period": "tick",
      "PeriodParameters": {
        "$type": "OFT.Controls.Chart.PeriodTimeFrame, OFT.Controls",
        "Period": 2000,
        "Label": "@value",
        "DefaultDaysToLoad": 5,
        "VisualName": "2000"
      },
      "LoadCustomDaysCount": false,
      "CustomDaysCount": 1,
      "LoadCustomEndDate": false,
      "CustomEndDate": "2018-08-30T22:35:36.6642228-05:00"
    },
    "Canvas": {
      "Elements": []
    },
    "LinkedPanels": [],
    "Width": 47.285503569656586434136517911,
    "StrategySettings": [],
    "TraderSettings": {
      "SelectedTIF": "goodTillCancel",
      "SelectedRoute": "",
      "SelectedOrderType": "market",
      "Volume": 1.0,
      "VolumeByCurrency": {},
      "IsPercentMode": false,
      "PercentVolume": 0.0,
      "StopPrice": 0.0,
      "LimitPrice": 42888.5,
      "StopTriggerPriceType": "last",
      "MarketOrderFlags": {
        "ReduceOnly": false
      },
      "LimitOrderFlags": {
        "ReduceOnly": false
      },
      "ConditionalMarketOrderFlags": {
        "ReduceOnly": false
      },
      "ConditionalLimitOrderFlags": {
        "ReduceOnly": false
      }
    },
    "IsVisibleDrawingObjectsBar": true
  },
  "IsSystem": false
}