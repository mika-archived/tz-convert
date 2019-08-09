<Query Kind="Program">
</Query>

void Main()
{
    var cldr = Path.Combine("..", "..", "..", "unicode-org", "cldr", "common", "supplemental", "windowsZones.xml");
    var xml = XDocument.Load(cldr);
    var sb = new StringBuilder();

    var timezones = new List<TimeZone>();
    foreach (var tz in TimeZoneInfo.GetSystemTimeZones().OrderBy(w => w.Id))
        timezones.Add(new TimeZone { Id = tz.Id });

    foreach (var zone in xml.XPathSelectElements("supplementalData/windowsZones/mapTimezones/mapZone"))
    {
        var id = zone.Attribute("other").Value;
        var territory = zone.Attribute("territory").Value;
        var type = zone.Attribute("type").Value;
        timezones.FirstOrDefault(w => w.Id == id)?.Zones?.Add(new Zone { Territory = territory, Type = type });
    }

    foreach (var timezone in timezones)
        sb.AppendLine($"{timezone.ToString()},");
    
    sb.ToString().Dump();
}

// Define other methods and classes here
class Zone
{
    public string Territory { get; set; }

    public string Type { get; set; }

    public override string ToString()
    {
        return $"{{ territory: \"{Territory}\", type: [{string.Join(", ", Type.Split(' ').Select(w => $"\"{w}\""))}]}}";
    }
}

class TimeZone
{
    public string Id { get; set; }

    public List<Zone> Zones { get; } = new List<Zone>();

    public override string ToString()
    {
        return $"{{ w: \"{Id}\", i: [{string.Join(", ", Zones.Select(w => w.ToString()))}]}}";
    }
}